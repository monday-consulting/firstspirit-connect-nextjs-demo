import type { FirstSpiritStandard } from "@/gql/generated/graphql";
import { assembleMarkdownParts } from "@/utils/contentParser";
import { renderLine } from "@/utils/strings";
/**
 * Template function for rendering a standard page layout in Markdown.
 */
export const templates = {
  standardPage: (data: FirstSpiritStandard) =>
    assembleMarkdownParts([
      data.ptHeadline && renderLine("# ", data.ptHeadline, !data.ptSubheadline),
      data.ptSubheadline && renderLine("## ", data.ptSubheadline),
      data.ptSubheadline && "---\n\n",
    ]),
};
