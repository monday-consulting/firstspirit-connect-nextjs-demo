export type FetchEntityType = "product" | "category" | "page" | "component" | "content";

export type FetcherBody = {
  type: FetchEntityType;
  locale: string;
  id?: string;
};

export type FetcherArgs = {
  url: string;
  headers?: Record<string, string>;
  body?: FetcherBody;
};

export const fetcher = (args: FetcherArgs) =>
  fetch(args.url, { method: "POST", headers: args.headers, body: JSON.stringify(args.body) }).then(
    (res) => res.json()
  );
