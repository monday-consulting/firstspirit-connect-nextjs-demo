# Netlify Connect Next.js Demo in a FirstSpirit Context
*"[Netlify Connect](https://www.netlify.com/platform/connect/) is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source"*

We use this technology to ensure that all data from Crownpeak CaaS is collected within a Netlify Connect Data Layer. This Data Layer provides a functional GraphQL schema, enabling us to build a fully customized frontend. In this project, we use [Next.js](https://nextjs.org/) by Vercel to demonstrate how to implement the Connector in a production-ready setup.

## Netlify Connect configuration
1. Add our FirstSpirit Module
2. Install extension in Netlify
3. Create Data Layer with extension
4. Add FirstSpirit information
5. Follow the frontend setup guidelines

## Setup
* Use pnpm as package manager
* Use recommended plugins

## File structure 
Frontend components are stored in `/src/components/`, their corresponding Storybook files are stored in `/src/stories/`. Within those directories there is a `sections/` folder for all components implemented as a FirstSpirit section, a `features/` folder containing subfolders storing subcomponents only used in components from the `sections/` folder. There is also a `globals/` folder containing components that are used throughout the project and are not strictly tied to other components, and finally there is the `layout/` folder containing the components and subcomponents that make up the standard page layout.

## Environment
For Next.js you should copy the `.env.example` content to an new `.env.development` file and replace it with your `DATA_LAYER_API_URL` and `DATA_LAYER_API_TOKEN`.
If you want to use the google maps API you should also enter your token for `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.

In production you should use an `.env` or an `.env.production` file.

## Codestyle and Linting
We use [biome.js](https://biomejs.dev/) for formatting and linting. To configure the plugin update the `/biome.json` file.

## Types Generation

We use [graphql-codegen](https://the-guild.dev/graphql/codegen) to generate our frontend type definitions. To configure the plugin, update the `/codegen.ts` file.

- **Generated TypeScript Files:** The generated TypeScript files are located in `/src/gql/generated/`.
- **GraphQL Documents:** The plugin reads all GraphQL expressions from `/src/gql/documents/` to build the type system.

*Best Practices: To maintain a clean and organized codebase, reusable components or sections are defined in **GraphQL fragments**. This practice helps improve maintainability and simplifies updates.*

## Internationalization (i18n)
We use [next-intl](https://next-intl-docs.vercel.app/) for internationalization, enabling dynamic routing and localized content across different languages. Unsupported locales trigger a 404 error. The different config files are located in `/src/i18n/`.


## Tailwind CSS
We use [Tailwind CSS](https://tailwindcss.com/) for component styling. Tailwind enables us to apply styles directly in the markup, keeping the styles scoped and the codebase clean without external CSS files or bloated class names. This utility-first approach ensures a dynamic and responsive design with minimal effort.

## Storybook
We use [Storybook](https://storybook.js.org/) for spot checking individual components during development. It allows us to test each component in an isolated environment. To create such an environment for a component, add a respective Storybook file in the `/src/stories/` folder.

## Scripts

### Install dependencies
`pnpm i`

### Start development environments
`pnpm dev:next` - starts Next.js
`pnpm dev:sb` - starts Storybook

### Builds
`pnpm build:next` - builds Next.js
`pnpm build:sb` - builds Storybook

### Start production environment
`pnpm start:next` - starts Next.js

### Codestyle and Linting
`pnpm check:ts` - starts TypeScript compiler and checks code
`pnpm check:lint` - checks code for linting errors
`pnpm check:format` - formats code by given biome styling rules
`pnpm check:all` - executes all styling and linting scripts at once

### Types generation
`pnpm codegen` - create GraphQL utility files and TypeScript definitions from schema

## Preview Mode

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
