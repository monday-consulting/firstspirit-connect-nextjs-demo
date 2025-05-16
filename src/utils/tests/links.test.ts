import type { FirstSpiritLinkUnion } from "@/gql/generated/graphql";
import {
  getConnectorLink,
  getNewsDetailLink,
  getProductDetailLink,
  getProductGroupLink,
  parseLink,
  stripNavigationFiles,
} from "../links";
import { removeSpecialCharacters, replaceUmlauts } from "../strings";

jest.mock("../strings", () => ({
  replaceUmlauts: jest.fn((str) => str),
  removeSpecialCharacters: jest.fn((str) => str),
}));

describe("stripNavigationFiles", () => {
  it("returns the path without the last file if it has an extension", () => {
    expect(stripNavigationFiles("/path/to/file.html")).toBe("/path/to/");
    expect(stripNavigationFiles("/path/to/somefile.js")).toBe("/path/to/");
  });

  it("returns the same path if there is no file extension", () => {
    expect(stripNavigationFiles("/path/to/folder")).toBe("/path/to/folder");
  });

  it("returns an empty string if path is null or undefined", () => {
    expect(stripNavigationFiles(null)).toBe("");
    expect(stripNavigationFiles(undefined)).toBe("");
  });
});

describe("parseLink", () => {
  it("converts string to lowercase and replaces spaces with hyphens", () => {
    expect(parseLink("Hello World")).toBe("hello-world");
  });

  it("calls replaceUmlauts and removeSpecialCharacters", () => {
    parseLink("test string");
    expect(replaceUmlauts).toHaveBeenCalledWith("test-string");
    expect(removeSpecialCharacters).toHaveBeenCalledWith("test-string");
  });
});

describe("getProductDetailLink", () => {
  it("returns product-detail link for the default locale", () => {
    expect(getProductDetailLink("Product 123", "en-GB")).toBe("/product-detail/product-123");
  });

  it("returns produkt-detail link for a non-default locale", () => {
    expect(getProductDetailLink("Produkt 456", "de-DE")).toBe("/produkt-detail/produkt-456");
  });

  it("calls parseLink with the product id", () => {
    const result = getProductDetailLink("Product 123", "de-DE");
    expect(result).toBe("/produkt-detail/product-123");
  });
});

describe("getProductGroupLink", () => {
  it("returns the link for the product group using parseLink", () => {
    expect(getProductGroupLink("Group Name")).toBe("group-name");
  });

  it("calls parseLink with the group name", () => {
    const result = getProductGroupLink("Group Name");
    expect(result).toBe("group-name");
  });
});

describe("getNewsDetailLink", () => {
  it("returns the link for the news detail page using parseLink", () => {
    expect(getNewsDetailLink("Breaking News")).toBe("/news/breaking-news");
  });

  it("calls parseLink with the news name", () => {
    const result = getNewsDetailLink("Breaking News");
    expect(result).toBe("/news/breaking-news");
  });
});

describe("getConnectorLink function", () => {
  const defaultLink = { href: "/", label: "Home" };

  it("should return default link if input is null or undefined", () => {
    expect(getConnectorLink(null)).toEqual(defaultLink);
    expect(getConnectorLink(undefined)).toEqual(defaultLink);
  });

  it("should return the internal link with the correct href and label when given a valid link", () => {
    const validLink = {
      __typename: "FirstSpiritInternalLink",
      ltLink: {
        __typename: "FirstSpiritPageRef",
        page: {
          route: "/example/page.html",
        },
      },
      ltText: "Example Page",
    } as FirstSpiritLinkUnion;

    const expectedLink = {
      href: "/example/",
      label: "Example Page",
    };

    expect(getConnectorLink(validLink)).toEqual(expectedLink);
  });
});
