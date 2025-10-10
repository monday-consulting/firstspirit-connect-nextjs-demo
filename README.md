# Netlify Connect Next.js Demo in a FirstSpirit Context

*"[Netlify Connect](https://www.netlify.com/platform/connect/) is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source"*

We use this technology to ensure that all data from Crownpeak CaaS is collected within a Netlify Connect Data Layer. This Data Layer provides a functional GraphQL schema, enabling us to build a fully customized frontend. In this project, we use [Next.js](https://nextjs.org/) by Vercel to demonstrate how to implement the Connector in a production-ready setup.

## ⚙️ Netlify Connect Configuration

1. Add our FirstSpirit Module
2. Install extension in Netlify
3. Create Data Layer with extension
4. Add FirstSpirit information
5. Follow the frontend setup guidelines

## 🛠️ Setup

- Use **pnpm** as package manager
- Use recommended plugins

## 📁 File Structure

Frontend components are stored in `/src/components/`, their corresponding Storybook files are stored in `/src/stories/`. Within those directories there is a:

- **`sections/`** folder for all components implemented as a FirstSpirit section
- **`features/`** folder containing subfolders storing subcomponents only used in components from the `sections/` folder
- **`globals/`** folder containing components that are used throughout the project and are not strictly tied to other components
- **`layout/`** folder containing the components and subcomponents that make up the standard page layout

## 🌍 Environment

For Next.js you should copy the `.env.example` content to a new `.env.development` file and replace it with your `DATA_LAYER_API_URL` and `DATA_LAYER_API_TOKEN`.

If you want to use the Google Maps API, you should also enter your token for `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.

In production you should use an `.env` or an `.env.production` file.

## ✨ Code Style and Linting

We use [biome.js](https://biomejs.dev/) for formatting and linting. To configure the plugin, update the `/biome.json` file.

## 🔧 Types Generation

We use [graphql-codegen](https://the-guild.dev/graphql/codegen) to generate our frontend type definitions. To configure the plugin, update the `/codegen.ts` file.

- **Generated TypeScript Files:** The generated TypeScript files are located in `/src/gql/generated/`
- **GraphQL Documents:** The plugin reads all GraphQL expressions from `/src/gql/documents/` to build the type system

**💡 Best Practice:** To maintain a clean and organized codebase, reusable components or sections are defined in **GraphQL fragments**. This practice helps improve maintainability and simplifies updates.

## 🌐 Internationalization (i18n)

We use [next-intl](https://next-intl-docs.vercel.app/) for internationalization, enabling dynamic routing and localized content across different languages. Unsupported locales trigger a 404 error. The configuration files are located in `/src/i18n/`.

## 🎨 Tailwind CSS

We use [Tailwind CSS](https://tailwindcss.com/) for component styling. Tailwind enables us to apply styles directly in the markup, keeping the styles scoped and the codebase clean without external CSS files or bloated class names. This utility-first approach ensures a dynamic and responsive design with minimal effort.

## 📚 Storybook

We use [Storybook](https://storybook.js.org/) for spot-checking individual components during development. It allows us to test each component in an isolated environment. To create such an environment for a component, add a respective Storybook file in the `/src/stories/` folder.

## 📋 Scripts

### 📦 Install Dependencies
```bash
pnpm i
```

### 🚀 Start Development Environments
```bash
pnpm netlify   # Starts Next.js with Netlify serverless functions
pnpm dev:next  # Starts Next.js only
pnpm dev:sb    # Starts Storybook
```

### 🔨 Builds
```bash
pnpm build:next  # Builds Next.js
pnpm build:sb    # Builds Storybook
```

### 🌟 Start Production Environment
```bash
pnpm start:next  # Starts Next.js
```

### ✅ Code Style and Linting
```bash
pnpm check:ts       # Starts TypeScript compiler and checks code
pnpm check:lint     # Checks code for linting errors
pnpm check:format   # Formats code by given biome styling rules
pnpm check:imports  # Formats all imports by a defined schema in biome
pnpm check:all      # Executes all styling and linting scripts at once
```

### 🔄 Types Generation
```bash
pnpm codegen  # create GraphQL utility files and TypeScript definitions from schema
```

When the environment variable `NEXT_PUBLIC_PREVIEW_MODE` is set to `"true"`, you can use the `getPreviewParams()` function from `@/utils/preview/getPreviewParams`.
This hook allows you to append a `data-preview-id` attribute to client-side components. Here's an example of how it can be used:

```tsx
import { getPreviewParams } from "@/utils/preview/getPreviewParams";

const ExampleComponent = () => {
  const previewProps = getPreviewParams("exampleId");

  return (
    <section {...previewProps}>
      {...}
    </section>
  );
};

export { ExampleComponent };
```

## 🤖 MCP Chat

### MCP Server

This project includes a **Model Context Protocol (MCP) Server** inside `/netlify/functions/mcpServer` that enables AI assistants to interact directly with FirstSpirit CMS content. The MCP Server provides:

- **🔧 Interactive Tools**: Search products, retrieve content, and perform operations
- **📚 Content Resources**: Access to pages and products as structured data
- **💡 AI Prompts**: Specialized templates for content optimization and comparison
- **🌐 Multi-language Support**: Localized content access across all configured languages

The MCP Server runs as a Netlify serverless function and supports real-time streaming for complex AI interactions without timeout limitations.

**📖 [Read the complete MCP Server documentation →](./netlify/functions/mcpServer/README.md)**

### MCP Client

The frontend communicates with the MCP Server through two Next.js API routes in `src/app/api/mcp/chat/`:

#### **`/api/mcp/chat` - Standard Chat Interface**

**GET**: Returns available MCP capabilities (tools, resources, prompts) and connection status.  
**POST**: Executes complete chat interactions with multi-model support (Claude, GPT, Gemini), resource loading, and tool execution.

#### **`/api/mcp/chat/stream` - Streaming Chat Interface**

**How Streaming Works:**
The streaming route uses **Server-Sent Events (SSE)** to deliver real-time chat responses. Instead of waiting for the entire response to complete, the server establishes a persistent connection and sends data in chunks as it becomes available:

1. **Connection Setup**: Client opens an EventSource connection to `/api/mcp/chat/stream`
2. **Initial Event**: Server sends `"start"` event with available MCP capabilities  
3. **Response Chunking**: AI response is split into word-level chunks sent as `"chunk"` events
4. **Progressive Display**: Frontend receives and displays each chunk immediately, creating a typewriter effect
5. **Completion**: Server sends `"complete"` event with final metadata and closes connection
6. **Error Handling**: Any errors trigger an `"error"` event with details

**Benefits:**
- **Better UX**: Users see responses appear progressively instead of waiting
- **Timeout Prevention**: Long responses don't trigger serverless function timeouts
- **Progress Indication**: Users know the system is working on complex requests

**Technical Implementation:**
Both routes maintain MCP server connections using a singleton pattern for performance, with automatic reconnection handling and concurrent request safety.
