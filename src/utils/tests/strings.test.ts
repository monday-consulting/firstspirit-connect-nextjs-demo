import { replaceUmlauts } from "../strings";

describe("replaceUmlauts", () => {
  it("should replace lowercase umlauts with correct character sequences", () => {
    const input = "käse, müde, schön";
    const output = replaceUmlauts(input);
    expect(output).toBe("kaese, muede, schoen");
  });

  it("should replace uppercase umlauts with correct character sequences", () => {
    const input = "Äpfel, Über, Österreich";
    const output = replaceUmlauts(input);
    expect(output).toBe("Aepfel, Ueber, Oesterreich");
  });

  it("should replace the ß character correctly", () => {
    const input = "Fußball, groß";
    const output = replaceUmlauts(input);
    expect(output).toBe("Fussball, gross");
  });

  it("should handle a string without umlauts", () => {
    const input = "Hello World";
    const output = replaceUmlauts(input);
    expect(output).toBe("Hello World");
  });

  it("should handle an empty string", () => {
    const input = "";
    const output = replaceUmlauts(input);
    expect(output).toBe("");
  });

  it("should handle a string with mixed umlauts and regular characters", () => {
    const input = "Männer mögen Fußball";
    const output = replaceUmlauts(input);
    expect(output).toBe("Maenner moegen Fussball");
  });
});
