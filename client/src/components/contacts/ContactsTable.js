import React, { useMemo } from "react";
import { useTable } from "react-table";
import IconOptions from "./IconOptions";

function ContactsTable({ data, setData }) {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "nameCol",
      },
      {
        Header: "Company",
        accessor: "companyCol",
      },
      {
        Header: "Position",
        accessor: "positionCol",
      },
      {
        Header: "Email",
        accessor: "emailCol",
      },
      {
        Header: "Phone Number",
        accessor: "numberCol",
      },
      {
        Header: "Notes",
        accessor: "notesCol",
        Cell: ({ value }) => <div className="min-w-[200px] whitespace-pre-wrap">{value}</div>,
      },
      {
        accessor: "optionsCol",
        Cell: (tableProps) => <IconOptions data={data} setData={setData} tableProps={tableProps} />,
      },
    ],
    [data, setData]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="mt-6 w-full overflow-auto border border-slate-900">
      <table {...getTableProps()}>
        <thead className="bg-slate-900 text-white">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="text-left p-4 whitespace-nowrap">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="even:bg-gray-200">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="p-4">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
