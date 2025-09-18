# FirstSpirit Connect MCP Server

A comprehensive **Model Context Protocol (MCP) Server** implementation running as a Netlify serverless function. This server provides AI assistants with structured access to FirstSpirit CMS content, enabling intelligent content management, product comparisons, and automated content operations.

## 🏗️ **Architecture Overview**

The MCP Server acts as a bridge between AI language models and FirstSpirit CMS, exposing content through three main MCP primitives:

- **🔧 Tools**: Interactive functions that perform operations (search, order products, etc.)
- **📚 Resources**: Static content that can be read and referenced (pages, products)
- **💡 Prompts**: Reusable prompt templates for common AI tasks

## 📁 **Project Structure**

```
netlify/functions/mcpServer/
├── index.mts                    # Main Netlify function entry point
├── README.md                    # This documentation
└── server/                      # MCP Server implementation
    ├── firstSpirit/            # FirstSpirit CMS integration
    ├── helper/                 # Utility functions
    ├── markdown/               # Content transformation utilities
    ├── prompts/                # AI prompt templates
    ├── resources/              # Content resource definitions
    ├── services/               # Data fetching services
    └── tools/                  # Interactive MCP tools
```

---

## 🚀 **Core Components**

### **Main Entry Point**

#### `index.mts`
The Netlify serverless function that handles all MCP requests:

- **Singleton Pattern**: Reuses MCP server instance across requests for performance
- **HTTP Transport**: Converts HTTP requests to JSON-RPC calls
- **Error Handling**: Graceful error responses with proper JSON-RPC formatting
- **Multi-locale Support**: Registers tools and resources for all configured locales

**Key Features:**
- Stateless operation suitable for serverless environments
- Efficient request routing via StreamableHTTPServerTransport
- Automatic server initialization with tools, resources, and prompts

---

## 🛠️ **Tools Directory**

Interactive functions that AI assistants can call to perform operations:

### `getAllResources.ts`
- **Purpose**: Provides a comprehensive overview of all available MCP resources
- **Usage**: Helps AI understand what content is available before making specific requests
- **Returns**: Formatted list of all pages and products across locales

### `getProducts.ts` 
- **Purpose**: Retrieves a complete list of all products for a specific locale
- **Parameters**: Automatically scoped by locale during registration
- **Returns**: Product names and URIs in easy-to-parse format
- **Use Case**: Product discovery, inventory overview, comparison preparation

### `getPages.ts`
- **Purpose**: Fetches all available pages/content for a specific locale
- **Parameters**: Automatically scoped by locale during registration  
- **Returns**: Page names and URIs for content navigation
- **Use Case**: Site structure analysis, content discovery, navigation assistance

### `orderProduct.ts`
- **Purpose**: Simulates product ordering functionality
- **Parameters**: Product details and customer information
- **Returns**: Order confirmation and details
- **Use Case**: E-commerce interactions, customer service automation

---

## 📚 **Resources Directory**

Static content that can be read and referenced by AI assistants:

### `pageResource.ts`
- **Purpose**: Exposes FirstSpirit pages as MCP resources
- **URI Pattern**: `fs://{locale}/{route}/`
- **Features**:
  - Dynamic route discovery from FirstSpirit API
  - Auto-completion support for page routes
  - Markdown conversion of page content
  - Metadata extraction (title, description, etc.)

### `productResource.ts`
- **Purpose**: Exposes FirstSpirit products as MCP resources  
- **URI Pattern**: `fs://{locale}/{route}/`
- **Features**:
  - Product catalog integration
  - Rich product information (specifications, pricing, features)
  - Markdown-formatted product descriptions
  - Category and tag support

---

## 💡 **Prompts Directory**

Reusable AI prompt templates for common content operations:

### `checkMarkdown.ts`
- **Purpose**: Validates and improves markdown content quality
- **Parameters**: Markdown content to analyze
- **Returns**: Quality assessment and improvement suggestions
- **Use Case**: Content quality assurance, markdown formatting

### `compareProducts.ts`
- **Purpose**: Generates structured product comparison prompts
- **Parameters**: Product names, categories, locale preferences
- **Returns**: Tailored comparison instructions in appropriate language
- **Use Case**: Product analysis, feature comparison, buying guidance

### `optimizeDescription.ts`
- **Purpose**: Enhances product and page descriptions for better SEO and readability
- **Parameters**: Original content, target audience, optimization goals
- **Returns**: Improved content suggestions
- **Use Case**: Content optimization, SEO improvement, user engagement

### `projectDescription.ts`
- **Purpose**: Generates comprehensive project documentation
- **Parameters**: Project scope, requirements, technical details
- **Returns**: Structured project description templates
- **Use Case**: Project planning, documentation, stakeholder communication

### `searchProducts.ts`
- **Purpose**: Creates intelligent product search prompts
- **Parameters**: Search criteria, filters, user preferences
- **Returns**: Optimized search instructions for finding relevant products
- **Use Case**: Product discovery, recommendation systems, customer support

---

## 🔧 **Helper Directory**

### `createEndpointFetcher.ts`
Utility for efficiently fetching FirstSpirit content endpoints:
- Caches endpoint data to minimize API calls
- Handles locale-specific content retrieval  
- Provides consistent error handling across services

---

## 📝 **Markdown Directory**

Content transformation utilities that convert FirstSpirit data to AI-friendly markdown:

- **`contentToMarkdown.ts`**: Main conversion engine
- **`templates.ts`**: Markdown template definitions
- **`tableFromContent.ts`**: Table generation from structured data
- **`formattedText.ts`**: Text formatting and styling
- **`assembleMarkdownParts.ts`**: Content aggregation utilities

---

## 🌐 **Services Directory**

### `pageService.ts`
- Fetches and processes FirstSpirit page data
- Handles page metadata and content extraction
- Provides caching for improved performance

### `productService.ts`  
- Retrieves product information from FirstSpirit
- Processes product specifications and features
- Manages product catalog data efficiently

---

## 🎯 **FirstSpirit Integration**

### `processPage.ts`
Core integration module that:
- Connects to FirstSpirit CMS APIs
- Handles authentication and session management
- Processes content structure and metadata
- Converts FirstSpirit data models to MCP-compatible formats

---

## 🚀 **Usage & Configuration**

### **Environment Variables**
```bash
# FirstSpirit CMS configuration
FIRSTSPIRIT_API_URL=https://your-fs-instance.com/api
FIRSTSPIRIT_API_KEY=your-api-key

# MCP Server configuration  
MCP_SERVER_URL=https://your-site.netlify.app/.netlify/functions/mcpServer
```

### **Supported Locales**
The server automatically registers tools and resources for all configured locales:
- `de-DE` (German)
- `en-GB` (English)

### **API Endpoints**
- **Main MCP Endpoint**: `/.netlify/functions/mcpServer`
- **HTTP Method**: POST
- **Content-Type**: application/json
- **Protocol**: JSON-RPC 2.0

---

## 🔐 **Security & Production Considerations**

⚠️ **Current Implementation Notes:**
This is a development/demo implementation. For production deployment, consider adding:

- **Authentication**: API key validation, JWT tokens
- **Rate Limiting**: Request throttling per client/IP
- **Input Validation**: Comprehensive request sanitization  
- **Error Logging**: Structured logging and monitoring
- **Caching**: Redis/memory caching for frequently accessed content
- **CORS Configuration**: Proper cross-origin resource sharing setup

---

## 📊 **Performance Features**

- **Singleton Server**: Reuses MCP server instances across requests
- **Endpoint Caching**: Minimizes FirstSpirit API calls
- **Efficient Transport**: StreamableHTTPServerTransport for optimal JSON-RPC handling
- **Stateless Design**: Optimized for serverless execution environments

---

## 🧪 **Testing & Development**

The MCP server can be tested using:
- MCP-compatible clients (Claude Desktop, etc.)
- Direct JSON-RPC calls for debugging
- FirstSpirit content changes reflected immediately
- Real-time content updates through dynamic resource discovery

---

## 🤝 **Integration Examples**

### **AI Assistant Integration**
```typescript
// Example: AI assistant using MCP tools
const products = await mcp.callTool("get-all-products-en-GB");
const comparison = await mcp.usePrompt("compare-products", {
  firstProduct: "Smart Thermostat",
  secondProduct: "Smart Hub",
  locale: "en-GB"
});
```

### **Content Management Workflow**
```typescript
// Example: Content optimization workflow
const page = await mcp.readResource("fs://en-GB/smart-home-guide/");
const optimized = await mcp.usePrompt("optimize-description", {
  content: page.content,
  target: "SEO optimization"
});
```

---

This MCP Server provides a robust foundation for AI-powered content management and customer interaction systems, enabling seamless integration between language models and FirstSpirit CMS content.
