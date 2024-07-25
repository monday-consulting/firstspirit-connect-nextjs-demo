export const replaceUmlauts = (str: string): string => {
  const umlautMap: { [key: string]: string } = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
    Ä: "Ae",
    Ö: "Oe",
    Ü: "Ue",
    ß: "ss",
  };

  return str.replace(/[äöüÄÖÜß]/g, (match) => umlautMap[match]);
};
