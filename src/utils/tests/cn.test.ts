import { cn } from "../cn"; // Replace './yourModule' with the actual file path

describe("cn", () => {
  it("merges Tailwind classes and handles conditional class names correctly", () => {
    expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
  });

  it("removes conflicting Tailwind classes using twMerge", () => {
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500"); // twMerge should prioritize the last class
  });

  it("handles conditional class names using clsx logic", () => {
    expect(cn("bg-red-500", false && "text-white", true && "text-black")).toBe(
      "bg-red-500 text-black"
    );
  });

  it("handles arrays and undefined values gracefully", () => {
    expect(cn("bg-red-500", ["text-white", undefined, "p-4"])).toBe("bg-red-500 text-white p-4");
  });

  it("merges classes correctly when using multiple class arrays", () => {
    expect(cn(["bg-red-500", "text-white"], ["p-4", "m-2"])).toBe("bg-red-500 text-white p-4 m-2");
  });
});
