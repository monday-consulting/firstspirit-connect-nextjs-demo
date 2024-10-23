import { RichTextElement, type RichTextElementContent } from "../elements/RichTextElement";

// export type PartsTableRow = {
//   colOne: string | number;
//   colTwo: string | number;
// };

export type PartsTableProps = {
  // tableHead: PartsTableRow;
  tableData: RichTextElementContent[];
  headline?: string;
  text?: RichTextElementContent[];
};

const PartsTable = ({ tableData, headline, text }: PartsTableProps) => {
  return (
    <section className="flex flex-col">
      {headline && <h2 className="text-center font-bold text-3xl text-primary">{headline}</h2>}
      {text && <RichTextElement content={text} className="text-center" />}
      {/* <table className="w-full table-auto text-left font-medium text-sm text-text">
        <thead>
          <tr className="text-base">
            <th className="px-6 py-3">
              <strong>{tableHead.colOne}</strong>
            </th>
            <th className="py-3 pr-6">
              <strong>{tableHead.colTwo}</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-lightGray">
            <td className="px-6 py-5" />
            <td className="py-5 pr-6" />
          </tr>
          {tableRows.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-5">{row.colOne}</td>
              <td className="py-5 pr-6">
                <span className="inline-block rounded-full bg-primary px-2 py-1 text-white">
                  {row.colTwo}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <RichTextElement content={tableData} />
    </section>
  );
};

export { PartsTable };
