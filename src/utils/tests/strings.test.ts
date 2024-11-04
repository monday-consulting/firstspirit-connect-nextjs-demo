import {
  formatDate,
  fuzzySearchObjects,
  levenshteinDistance,
  removeSpecialCharacters,
  replaceUmlauts,
} from "../strings";

describe("replaceUmlauts", () => {
  it("replaces umlauts with their corresponding characters", () => {
    expect(replaceUmlauts("Mädchen")).toBe("Maedchen");
    expect(replaceUmlauts("Äpfel")).toBe("Aepfel");
    expect(replaceUmlauts("Über")).toBe("Ueber");
    expect(replaceUmlauts("größer")).toBe("groesser");
  });

  it("returns the same string if no umlauts are present", () => {
    expect(replaceUmlauts("Hello")).toBe("Hello");
    expect(replaceUmlauts("World")).toBe("World");
  });
});

describe("removeSpecialCharacters", () => {
  it("removes special characters from the string", () => {
    expect(removeSpecialCharacters("Hello!@# World$%^")).toBe("HelloWorld");
    expect(removeSpecialCharacters("abc123-_=")).toBe("abc123-");
  });

  it("leaves alphanumeric and hyphen characters intact", () => {
    expect(removeSpecialCharacters("Test-123")).toBe("Test-123");
  });
});

describe("formatDate", () => {
  it("formats an ISO date string in dd.mm.yyyy format", () => {
    expect(formatDate("2024-11-04")).toBe("04.11.2024");
    expect(formatDate("2000-01-01")).toBe("01.01.2000");
  });
});

describe("levenshteinDistance", () => {
  it("calculates the correct Levenshtein distance between strings", () => {
    expect(levenshteinDistance("kitten", "sitting")).toBe(3);
    expect(levenshteinDistance("flaw", "lawn")).toBe(2);
    expect(levenshteinDistance("gumbo", "gambol")).toBe(2);
  });

  it("returns 0 for identical strings", () => {
    expect(levenshteinDistance("test", "test")).toBe(0);
  });
});

describe("fuzzySearchObjects", () => {
  const objects = [
    { name: "apple", category: "fruit" },
    { name: "banana", category: "fruit" },
    { name: "carrot", category: "vegetable" },
    { name: "grape", category: "fruit" },
  ];

  it("returns objects whose property matches the query exactly", () => {
    expect(fuzzySearchObjects("apple", objects, "name")).toEqual([
      { name: "apple", category: "fruit" },
    ]);
  });

  it("returns objects with Levenshtein distance <= maxDistance", () => {
    expect(fuzzySearchObjects("grap", objects, "name")).toEqual([
      { name: "grape", category: "fruit" },
    ]);
  });

  it("prioritizes exact matches over fuzzy matches", () => {
    expect(fuzzySearchObjects("banana", objects, "name")).toEqual([
      { name: "banana", category: "fruit" },
    ]);
  });

  it("returns multiple matching objects", () => {
    expect(fuzzySearchObjects("fruit", objects, "category")).toEqual([
      { name: "apple", category: "fruit" },
      { name: "banana", category: "fruit" },
      { name: "grape", category: "fruit" },
    ]);
  });

  it("returns empty array if no matches are found", () => {
    expect(fuzzySearchObjects("orange", objects, "name")).toEqual([]);
  });
});
