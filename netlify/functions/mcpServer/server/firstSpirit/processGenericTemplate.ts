import type {
  FirstSpiritInlineDatasetUnionB50D929C,
  FirstSpiritInlineSectionUnion638Da777,
} from "@/lib/gql/generated/graphql";
import { genericTemplate } from "../markdown/genericTemplate";

export type FirstSpiritInlineInput =
  | FirstSpiritInlineSectionUnion638Da777
  | FirstSpiritInlineDatasetUnionB50D929C;

/**
 * Processes a FirstSpirit inline input and returns markdown output.
 * This is a simple wrapper that transforms the input into markdown using the generic template.
 */
export const processFirstSpirintInlineInput = (data: FirstSpiritInlineInput): string => {
  return genericTemplate(data);
};
