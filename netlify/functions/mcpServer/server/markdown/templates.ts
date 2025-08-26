import type { FirstSpiritStandard } from "@/lib/gql/generated/graphql";

import { renderLine } from "@/utils/strings";
import { assembleMarkdownParts } from "./assembleMarkdownParts";
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
