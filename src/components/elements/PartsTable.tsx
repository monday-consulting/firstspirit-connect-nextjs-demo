export type PartsTableRow = {
  col_one: string | number;
  col_two: string | number;
};

export type PartsTableProps = {
  tableHead: PartsTableRow;
  tableRows: PartsTableRow[];
};

const PartsTable = ({ tableHead, tableRows }: PartsTableProps) => {
  return (
    <table className="w-full table-auto text-left font-medium text-sm text-text">
      <thead>
        <tr className="text-base">
          <th className="px-6 py-3">
            <strong>{tableHead.col_one}</strong>
          </th>
          <th className="py-3 pr-6">
            <strong>{tableHead.col_two}</strong>
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
            <td className="px-6 py-5">{row.col_one}</td>
            <td className="py-5 pr-6">
              <span className="inline-block rounded-full bg-primary px-2 py-1 text-white">
                {row.col_two}%
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { PartsTable };
