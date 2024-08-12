export type Section = {
  type: "Section";
  id: string;
  name?: string;
  displayName?: string;
  previewId: string;
  sectionType: string;
  data: {
    [key: string]: unknown;
  };
  displayed?: boolean;
  lifespan?: {
    start: Date;
    end?: Date;
  };
  children: Section[];
};

export type Dataset = {
  type: "Dataset";
  id: string;
  previewId: string;
  schema: string;
  entityType: string;
  template: string;
  children: Section[];
  // biome-ignore lint/suspicious/noExplicitAny: We will add this types later
  data: any;
  route: string;
  routes: {
    pageRef: string;
    route: string;
  };
  remoteProjectId?: string;
  locale: string;
};

export type ImageData = {
  src: string;
  alt: string;
};
