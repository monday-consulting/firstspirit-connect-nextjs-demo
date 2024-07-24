import { getPageContentById } from "@/gql/pageContent";

type Option = {
  type: "Option";
  key: string;
  value: string;
};

type LinkData = {
  lt_link: {
    type: "Reference";
    referenceId: string;
    referenceType: "PageRef";
  };
  lt_text: string;
};

type Link = {
  type: "Link";
  template: "internal_link";
  data: LinkData;
  meta: Record<string, unknown>;
};

type TextContent = {
  type: "text";
  content: string;
  data: Record<string, unknown>;
};

type Paragraph = {
  data: Record<string, unknown>;
  content: TextContent[];
  type: "paragraph";
};

type TextAlignment = {
  type: "Option";
  key: "left" | "right";
  value: "Left" | "Right";
  fsType: "Option";
  label: "Left" | "Right";
  identifier: "left" | "right";
};

type SectionData = {
  st_category: Option;
  st_category_link: Link;
  st_headline: string;
  st_sectionLifespanFrom: string | null;
  st_sectionLifespanTo: string | null;
  st_text: Paragraph[];
  st_text_alignment: TextAlignment;
};

type Section = {
  id: string;
  type: "Section";
  name: string;
  displayName: string;
  sectionType: string;
  previewId: string;
  data: SectionData;
  displayed: boolean;
  children: Section[];
};

const SlugPage = async () => {
  const pageContent = await getPageContentById("10f3e2ca-b451-5ab0-b83b-eba3034c55ea");
  const pageBodies = pageContent?.pageBodies?.map((item) => item?.children);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {pageBodies && (
        <div>
          {pageBodies?.map((body) => (
            <p key={body.name}>{body.name}</p>
          ))}
        </div>
      )} */}
    </main>
  );
};

export default SlugPage;
