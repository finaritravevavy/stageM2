// "use client";

// import { PERSONNE_QUERY } from "@queries/personne";
// import { useNavigation } from "@refinedev/core";
// import { useTable } from "@refinedev/react-table";
// import { ColumnDef, flexRender } from "@tanstack/react-table";
// import React from "react";

// export default function PersonneList() {
//   const columns = React.useMemo<ColumnDef<any>[]>(
//     () => [
//       {
//         id: "id",
//         accessorKey: "id",
//         header: "ID",
//       },
//       {
//         id: "nom",
//         accessorKey: "nom",
//         header: "Nom",
//       },
//       {
//         id: "prenom",
//         accessorKey: "prenom",
//         header: "Prenom",
//       },
//       {
//         id: "age",
//         accessorKey: "age",
//         header: "Age",
//       },
//       {
//         id: "actions",
//         accessorKey: "id",
//         header: "Actions",
//         cell: function render({ getValue }) {
//           return (
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 gap: "4px",
//               }}
//             >
//               <button
//                 onClick={() => {
//                   show("personnes", getValue() as string);
//                 }}
//               >
//                 Show
//               </button>
//               <button
//                 onClick={() => {
//                   edit("personnes", getValue() as string);
//                 }}
//               >
//                 Edit
//               </button>
//             </div>
//           );
//         },
//       },
//     ],
//     []
//   );

//   const { edit, show, create } = useNavigation();

//   const {
//     getHeaderGroups,
//     getRowModel,
//     setOptions,
//     getState,
//     setPageIndex,
//     getCanPreviousPage,
//     getPageCount,
//     getCanNextPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//   } = useTable({
//     columns,
//     refineCoreProps: {
//       meta: {
//         fields: PERSONNE_QUERY,
//       },
//     },
//   });

//   setOptions((prev) => ({
//     ...prev,
//     meta: {
//       ...prev.meta,
//     },
//   }));

//   return (
//     <div style={{ padding: "16px" }}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <h1>List</h1>
//         <button onClick={() => create("categories")}>Create</button>
//       </div>
//       <div style={{ maxWidth: "100%", overflowY: "scroll" }}>
//         <table>
//           <thead>
//             {getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <th key={header.id}>
//                     {!header.isPlaceholder &&
//                       flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody>
//             {getRowModel().rows.map((row) => (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div style={{ marginTop: "12px" }}>
//         <button
//           onClick={() => setPageIndex(0)}
//           disabled={!getCanPreviousPage()}
//         >
//           {"<<"}
//         </button>
//         <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
//           {"<"}
//         </button>
//         <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
//           {">"}
//         </button>
//         <button
//           onClick={() => setPageIndex(getPageCount() - 1)}
//           disabled={!getCanNextPage()}
//         >
//           {">>"}
//         </button>
//         <span>
//           <strong>
//             {" "}
//             {getState().pagination.pageIndex + 1} / {getPageCount()}{" "}
//           </strong>
//         </span>
//         <span>
//           | Go:{" "}
//           <input
//             type="number"
//             defaultValue={getState().pagination.pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               setPageIndex(page);
//             }}
//           />
//         </span>{" "}
//         <select
//           value={getState().pagination.pageSize}
//           onChange={(e) => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }


"use client";

import { PERSONNE_QUERY } from "@queries/personne";
import { useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import React from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path based on your project structure
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"; // Adjust the import path
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // Adjust the import path

export default function PersonneList() {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "id",
        accessorKey: "id",
        header: "ID",
      },
      {
        id: "nom",
        accessorKey: "nom",
        header: "Nom",
      },
      {
        id: "prenom",
        accessorKey: "prenom",
        header: "Prenom",
      },
      {
        id: "age",
        accessorKey: "age",
        header: "Age",
      },
      {
        id: "actions",
        accessorKey: "id",
        header: "Actions",
        cell: function render({ getValue }) {
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Button onClick={() => show("personne", getValue() as string)}>Show</Button>
              <Button onClick={() => edit("personne", getValue() as string)}>Edit</Button>
              {/* 
              creation button delete 
              */}
            </div>
          );
        },
      },
    ],
    []
  );

  const { edit, show, create } = useNavigation();

  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable({
    columns,
    refineCoreProps: {
      meta: {
        fields: PERSONNE_QUERY,
      },
    },
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1>List</h1>
        <Button onClick={() => create("personne")}>Create</Button>
      </div>
      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>
        <Table>
          <TableHeader>
            {getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {!header.isPlaceholder &&
                      flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
        <Button onClick={() => setPageIndex(0)} disabled={!getCanPreviousPage()}>
          {"<<"}
        </Button>
        <Button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          {"<"}
        </Button>
        <Button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          {">"}
        </Button>
        <Button onClick={() => setPageIndex(getPageCount() - 1)} disabled={!getCanNextPage()}>
          {">>"}
        </Button>
        <span>
          <strong>
            {" "}
            {getState().pagination.pageIndex + 1} / {getPageCount()}{" "}
          </strong>
        </span>
        <span>
          | Go:{" "}
          <input
            type="number"
            defaultValue={getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              setPageIndex(page);
            }}
          />
        </span>{" "}
        <Select
          value={getState().pagination.pageSize}
          onValueChange={(value) => setPageSize(Number(value))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Show" />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize}>
                Show {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}