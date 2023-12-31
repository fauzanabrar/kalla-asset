"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table as TableType,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Checkbox } from "../../../../../@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../../../@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../@/components/ui/table";
import { Button } from "../../../../../@/components/ui/button";
import { Input } from "../../../../../@/components/ui/input";
import { DialogDemo } from "../Dialog/MyDialog";
import { SelectDemo } from "../Select/Select";
import { SelectPageSize } from "../Select/SelectPageSize";
import Pagination from "../Pagination/Pagination";
import StatusItem from "../../Status/StatusItem";

export type Asset = {
  id: string;
  name: string;
  jenis: string;
  user: string;
  sbu: string;
  status:
    | "Menunggu RAB"
    | "Menunggu PR"
    | "PR diupload"
    | "Diverifikasi"
    | "Pengadaan"
    | "Selesai"
    | "Ditolak";
  queue: number;
};

const assetData: Asset[] = [
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 1,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputerisasi",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 2,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 3,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 1,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputerisasi",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 2,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 3,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 1,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputerisasi",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 2,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 3,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 1,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputerisasi",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 2,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 3,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 1,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputerisasi",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 2,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 3,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 1,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputerisasi",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 2,
  },
  {
    id: "m5gr84i9",
    name: "Pembelian Komputer",
    jenis: "Komputer",
    user: "jflkdasf",
    sbu: "SBU 1",
    status: "Menunggu RAB",
    queue: 3,
  },
];

interface nameType {
  row: {
    original: {
      name: string;
      jenis: string;
    };
  };
}

export const columns: ColumnDef<Asset>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: nameType) => (
      <div>
        <div className="capitalize">{row.original.name}</div>
        <div className="capitalize">{row.original.jenis}</div>
      </div>
    ),
  },
  {
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("user")}</div>,
  },
  {
    accessorKey: "sbu",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          SBU
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("sbu")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <StatusItem status={row.getValue("status")} />
    ),
  },
  {
    accessorKey: "queue",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="w-full"
        >
          Queue
          <ArrowUpDown className="h-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.getValue("queue")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <DialogDemo />;
    },
  },
];

type PropsType = {
  tableName: string;
  initialPageSize: number;
};

export function DataTableAsset({ initialPageSize, tableName} : PropsType) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const changePageSize = (pageSize: number, table: TableType<Asset>) => {
    table.setPageSize(pageSize);
  };

  const table: TableType<Asset> = useReactTable({
    data: assetData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState : {
      pagination: {
        pageSize: initialPageSize,
      }
    }
  });

  return (
    <div className="w-full">
      <div>
        <p className="text-2xl px-1">{ tableName }</p>
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          <span>Page per row : </span>
          <SelectPageSize
            onValueChange={(value: string) =>
              changePageSize(parseInt(value), table)
            }
            defaultValue="5"
          />
        </div>
        <div className="space-x-2">
          <Pagination table={table}/>
        </div>
      </div>
    </div>
  );
}
