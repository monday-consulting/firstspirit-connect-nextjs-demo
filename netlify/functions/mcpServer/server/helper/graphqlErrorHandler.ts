/**
 * Handles GraphQL errors with appropriate logging based on error type
 */
export function handleGraphQLError(error: unknown, context: string, identifier: string): void {
  const errorString = String(error);

  // Handle common GraphQL errors with appropriate logging levels
  if (errorString.includes("Code: 403")) {
    // Access denied - usually draft/private content, log at debug level
    console.debug(
      `[MCP Server] 🔒 ${context} access restricted: ${identifier} (likely draft/private content)`
    );
  } else if (errorString.includes("Code: 404")) {
    // Not found - log at debug level
    console.debug(`[MCP Server] 🔍 ${context} not found: ${identifier}`);
  } else if (errorString.includes("Code: 429")) {
    // Rate limiting - log as warning
    console.warn(`[MCP Server] ⏱️ ${context} rate limited: ${identifier}`);
  } else if (
    errorString.includes("timeout") ||
    errorString.includes("ECONNRESET") ||
    errorString.includes("network")
  ) {
    // Network errors - log as warning
    console.warn(`[MCP Server] 🌐 ${context} network error: ${identifier}`);
  } else {
    // Unknown errors - log as error with details
    console.error(`[MCP Server] ⚠️ ${context} unexpected error: ${identifier} - ${errorString}`);
  }
}
