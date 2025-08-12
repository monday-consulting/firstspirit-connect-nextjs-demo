"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  toolsUsed?: Array<{ name: string; args: any; result: any }>;
  resourcesUsed?: Array<{ uri: string; content: any }>;
  promptsUsed?: Array<{ name: string; args: any; content: any }>;
  timestamp: Date;
}

export default function SimpleChatUI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [availableTools, setAvailableTools] = useState<string[]>([]);
  const [availableResources, setAvailableResources] = useState<any[]>([]);
  const [availablePrompts, setAvailablePrompts] = useState<any[]>([]);
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [selectedPrompts, setSelectedPrompts] = useState<Array<{ name: string; args?: any }>>([]);
  const [connectedServers, setConnectedServers] = useState<string[]>([]);
  const [showServerConfig, setShowServerConfig] = useState(false);
  const [customSystemPrompt, setCustomSystemPrompt] = useState<string>("");
  const [selectedPreset, setSelectedPreset] = useState<string>("default");

  const systemPromptPresets = {
    default: "Default MCP-First: Always use MCP features proactively ⚡",
    ultra_aggressive: "Ultra Aggressive: Use EVERY MCP feature for EVERY response 🚨",
    aggressive: "Aggressive: Use ALL available MCP features for every response 🔥",
    balanced: "Balanced: Use MCP when clearly beneficial ⚖️",
    weatherExpert: "Weather Expert: Specialized for weather queries 🌤️",
    assistant: "Assistant: General purpose with MCP when helpful 🤖",
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/mcp/init", { method: "GET" });
        const raw = await res.text(); // immer erst Text holen
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText} – Body: ${raw?.slice(0, 400)}`);
        }
        let data: any = null;
        try {
          data = raw ? JSON.parse(raw) : null;
        } catch {
          throw new Error(`JSON parse failed. Body: ${raw?.slice(0, 400)}`);
        }

        setAvailableTools(data?.tools?.map((t: any) => t.name) || []);
        setAvailableResources(data?.resources || []);
        setAvailablePrompts(data?.prompts || []);
        setConnectedServers(data?.connected ? ["default"] : []);
      } catch (e) {
        console.error("MCP init failed", e);
        // Optional: UI-Feedback setzen
        setConnectedServers([]);
        setAvailableTools([]);
        setAvailableResources([]);
        setAvailablePrompts([]);
      }
    })();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/mcp/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          useResources: selectedResources.length ? selectedResources : undefined,
          usePrompts: selectedPrompts.length ? selectedPrompts : undefined,
          customSystemPrompt:
            selectedPreset === "custom"
              ? customSystemPrompt.trim() || undefined
              : selectedPreset !== "default"
                ? selectedPreset
                : undefined,
          autoLoadAllResources: false,
          autoApplyRelevantPrompts: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        toolsUsed: data.toolsUsed,
        resourcesUsed: data.resourcesUsed,
        promptsUsed: data.promptsUsed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Update available tools, resources, and prompts
      if (data.availableTools) {
        setAvailableTools(data.availableTools.map((tool: any) => tool.name));
      }

      if (data.availableResources) {
        setAvailableResources(data.availableResources);
      }
      if (data.availablePrompts) {
        setAvailablePrompts(data.availablePrompts);
      }
      if (data.connectedServers) {
        setConnectedServers(data.connectedServers);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        {/* MCP Configuration Panel */}
        <div className="mx-auto mb-4 max-w-4xl rounded-lg bg-white p-4 shadow">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="font-semibold text-gray-800">MCP Configuration</h3>
            <button
              onClick={() => setShowServerConfig(!showServerConfig)}
              className="text-blue-600 text-sm hover:text-blue-800"
            >
              {showServerConfig ? "Hide" : "Show"} Config
            </button>
          </div>

          {showServerConfig && (
            <div className="space-y-3">
              {/* System Prompt Configuration */}
              <div className="text-sm">
                <div className="mb-2 font-medium text-gray-700">System Prompt Configuration:</div>

                {/* Preset Selection */}
                <div className="mb-2">
                  <label className="mb-1 block text-gray-600 text-xs">Choose Preset:</label>
                  <select
                    value={selectedPreset}
                    onChange={(e) => {
                      setSelectedPreset(e.target.value);
                      if (e.target.value !== "custom") {
                        setCustomSystemPrompt("");
                      }
                    }}
                    className="w-full rounded border border-gray-300 px-2 py-1 text-xs"
                  >
                    {Object.entries(systemPromptPresets).map(([key, description]) => (
                      <option key={key} value={key}>
                        {description}
                      </option>
                    ))}
                    <option value="custom">Custom Prompt</option>
                  </select>
                </div>

                {/* Custom Prompt Input */}
                {selectedPreset === "custom" && (
                  <div>
                    <label className="mb-1 block text-gray-600 text-xs">
                      Custom System Prompt:
                    </label>
                    <textarea
                      value={customSystemPrompt}
                      onChange={(e) => setCustomSystemPrompt(e.target.value)}
                      placeholder="Enter your custom system prompt..."
                      className="w-full resize-none rounded border border-gray-300 px-2 py-1 text-black text-xs"
                      rows={4}
                    />
                  </div>
                )}

                <div className="mt-1 text-gray-500 text-xs">
                  {selectedPreset === "custom"
                    ? "Using custom system prompt"
                    : `Using "${selectedPreset}" preset - instructs Claude to use MCP features appropriately`}
                </div>
              </div>

              {/* Resource Selection */}
              {availableResources.length > 0 && (
                <div className="text-sm">
                  <div className="mb-1 font-medium text-gray-700">Available Resources:</div>
                  <div className="space-y-1">
                    {availableResources.map((resource, index) => (
                      <label key={index} className="flex items-center text-xs">
                        <input
                          type="checkbox"
                          checked={selectedResources.includes(resource.uri)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedResources([...selectedResources, resource.uri]);
                            } else {
                              setSelectedResources(
                                selectedResources.filter((uri) => uri !== resource.uri)
                              );
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="font-mono">{resource.name}</span>
                        <span className="ml-1 text-gray-500">({resource.uri})</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Prompt Selection */}
              {availablePrompts.length > 0 && (
                <div className="text-sm">
                  <div className="mb-1 font-medium text-gray-700">Available Prompts:</div>
                  <div className="space-y-1">
                    {availablePrompts.map((prompt, index) => (
                      <label key={index} className="flex items-center text-xs">
                        <input
                          type="checkbox"
                          checked={selectedPrompts.some((p) => p.name === prompt.name)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPrompts([
                                ...selectedPrompts,
                                {
                                  name: prompt.name,
                                },
                              ]);
                            } else {
                              setSelectedPrompts(
                                selectedPrompts.filter((p) => p.name !== prompt.name)
                              );
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="font-mono">{prompt.name}</span>
                        <span className="ml-1 text-gray-500">- {prompt.description}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-2 rounded border border-green-200 bg-green-50 p-2">
                <div className="mb-1 font-medium text-green-800 text-sm">
                  🚀 MAXIMUM MCP MODE ACTIVE!
                </div>
                <div className="space-y-1 text-green-700 text-xs">
                  <div>✅ Auto-configured via .env.local</div>
                  <div>✅ Auto-loading ALL {availableResources.length} resources</div>
                  <div>
                    ✅ Auto-applying relevant prompts from {availablePrompts.length} available
                  </div>
                  <div>✅ All {availableTools.length} tools ready for aggressive use</div>
                  <div>
                    ✅ System prompt:{" "}
                    <strong>
                      {systemPromptPresets[selectedPreset as keyof typeof systemPromptPresets] ||
                        "Custom"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">Connected:</span>
              <span className="ml-1 text-blue-600">
                {connectedServers.length > 0 ? `${connectedServers.length} server(s)` : "None"}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Tools:</span>
              <span className="ml-1 text-green-600">
                {availableTools.length > 0 ? availableTools.join(", ") : "None"}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Resources:</span>
              <span className="ml-1 text-purple-600">{availableResources.length}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Prompts:</span>
              <span className="ml-1 text-orange-600">{availablePrompts.length}</span>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="mx-auto flex h-96 max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="py-8 text-center text-gray-500">
                <div className="mb-4 text-6xl">🤖</div>
                <p>Start a conversation with Claude!</p>
                <p className="mt-2 text-sm">
                  MCP features will be used automatically and aggressively
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>

                  {/* Show tools used */}
                  {message.toolsUsed && message.toolsUsed.length > 0 && (
                    <div className="mt-2 border-gray-300 border-t pt-2 text-xs opacity-75">
                      <details>
                        <summary className="cursor-pointer">
                          🛠️ Used {message.toolsUsed.length} tool(s)
                        </summary>
                        <div className="mt-1 space-y-1">
                          {message.toolsUsed.map((tool, i) => (
                            <div key={i} className="font-mono text-xs">
                              <strong>{tool.name}</strong>
                              <pre className="mt-1 text-xs">
                                {JSON.stringify(tool.args, null, 2)}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  )}

                  {/* Show resources used */}
                  {message.resourcesUsed && message.resourcesUsed.length > 0 && (
                    <div className="mt-2 border-gray-300 border-t pt-2 text-xs opacity-75">
                      <details>
                        <summary className="cursor-pointer">
                          📄 Used {message.resourcesUsed.length} resource(s)
                        </summary>
                        <div className="mt-1 space-y-1">
                          {message.resourcesUsed.map((resource, i) => (
                            <div key={i} className="font-mono text-xs">
                              <strong>{resource.uri}</strong>
                              <pre className="mt-1 max-h-20 overflow-y-auto text-xs">
                                {JSON.stringify(resource.content, null, 2)}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  )}

                  {/* Show prompts used */}
                  {message.promptsUsed && message.promptsUsed.length > 0 && (
                    <div className="mt-2 border-gray-300 border-t pt-2 text-xs opacity-75">
                      <details>
                        <summary className="cursor-pointer">
                          💬 Used {message.promptsUsed.length} prompt(s)
                        </summary>
                        <div className="mt-1 space-y-1">
                          {message.promptsUsed.map((prompt, i) => (
                            <div key={i} className="font-mono text-xs">
                              <strong>{prompt.name}</strong>
                              {prompt.args && Object.keys(prompt.args).length > 0 && (
                                <pre className="mt-1 text-xs">
                                  Args: {JSON.stringify(prompt.args, null, 2)}
                                </pre>
                              )}
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  )}

                  <div className="mt-1 text-xs opacity-75">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-lg bg-gray-100 p-3 text-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="animate-pulse">Claude is thinking...</div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                        style={{
                          animationDelay: "0.1s",
                        }}
                      ></div>
                      <div
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                        style={{
                          animationDelay: "0.2s",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t p-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={loading}
              className="flex-1 resize-none rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
