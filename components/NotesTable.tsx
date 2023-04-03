import React, { useState } from "react";
import { FaSearch, FaSort } from "react-icons/fa";

type Note = {
  name: string;
  description: string;
  fileUrl: string;
};

type Props = {
  notes: Note[];
};

const NotesTable = ({ notes }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortedColumn, setSortedColumn] = useState<"name" | "description">(
    "name"
  );

  const filteredData = notes.filter((item) =>
    `${item.name} ${item.description} ${item.fileUrl}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const sortedData = notes.sort((a, b) => {
    const aVal = a[sortedColumn].toLowerCase();
    const bVal = b[sortedColumn].toLowerCase();
    if (aVal < bVal) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (aVal > bVal) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });
  const handleSort = (column: "name" | "description") => {
    setSortedColumn(column);
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <div className="float-right my-2 relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaSearch className="h-5 w-5 text-gray-400" />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <table className="w-full border-collapse mt-1 bg-white border-gray-500 border shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="p-3 text-left font-bold uppercase border border-gray-300 cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
              <FaSort className="h-4 w-4 text-gray-400 inline-block ml-1" />
            </th>
            <th
              className="p-3 text-left font-bold uppercase border border-gray-300 cursor-pointer"
              onClick={() => handleSort("description")}
            >
              Description
              <FaSort className="h-4 w-4 text-gray-400 inline-block ml-1 " />
            </th>
            <th className="p-3 text-left font-bold uppercase border border-gray-300">
              File
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((note, idx: number) => (
            <tr key={idx}>
              <td className="p-3 border border-gray-300">{note.name}</td>
              <td className="p-3 border border-gray-300">{note.description}</td>
              <td className="p-3 border border-gray-300">
                <a
                  href={note.fileUrl}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default NotesTable;
