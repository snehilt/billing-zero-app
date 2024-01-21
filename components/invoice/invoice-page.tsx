"use client";
import React from "react";
import { DataTable } from "@/components/tables/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

type Props = {};

const InvoicePage = (props: Props) => {
  const data: Payment[] = [
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      status: "Pending",
      dateStarted: "January, 2nd 2023",
    },
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      status: "Approved",
      dateStarted: "January, 2nd 2023",
    },
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      status: "Approved",
      dateStarted: "January, 2nd 2023",
    },
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      status: "Pending",
      dateStarted: "January, 2nd 2023",
    },
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      status: "Approved",
      dateStarted: "January, 2nd 2023",
    },
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      status: "Pending",
      dateStarted: "January, 2nd 2023",
    },
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      dateStarted: "January, 2nd 2023",
      status: "Approved",
    },
    {
      id: "m5gr84i9",
      incomeRecieved: "12,24564.256",
      clientName: "Apex Innovations Co.",
      contactName: "Sana Alex",
      status: "Approved",
      dateStarted: "January, 2nd 2023",
    },
  ];

  type Payment = {
    id: string;
    incomeRecieved: string;
    clientName: string;
    contactName: string;
    dateStarted: string;
    status: "Pending" | "processing" | "Approved" | "failed";
  };

  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "clientName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-semibold text-black text-md"
          >
            Client Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center">{row.getValue("clientName")}</div>
      ),
    },
    {
      accessorKey: "contactName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-semibold text-black text-md"
          >
            Contact Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center">{row.getValue("contactName")}</div>
      ),
    },
    {
      accessorKey: "dateStarted",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-semibold text-black text-md"
          >
            Date Started
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="text-center">{row.getValue("dateStarted")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-semibold text-black text-md"
          >
            Status
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div
          className={`text-center ${
            row.getValue("status") === "Approved"
              ? "text-green-600"
              : "text-amber-500"
          } `}
        >
          <Button
            variant="secondary"
            className={`font-semibold ${
              row.getValue("status") === "Approved"
                ? "text-green-600 bg-green-600 bg-opacity-10"
                : "text-amber-500 bg-amber-500 bg-opacity-10"
            } text-md`}
          >
            {row.getValue("status")}
          </Button>
        </div>
      ),
    },
    {
      accessorKey: "incomeRecieved",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-semibold text-black text-md"
          >
            Income Recieved
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("incomeRecieved"));

        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return (
          <div className=" text-center text-green-600 font-medium">
            {formatted}
          </div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="flex h-full w-full  p-4">
      <DataTable
        columns={columns}
        data={data}
        buttonTitle={"Add New Invoice"}
      />
    </div>
  );
};

export default InvoicePage;
