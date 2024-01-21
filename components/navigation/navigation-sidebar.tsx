"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import {
  Home,
  CircleUserRound,
  NotebookPen,
  ReceiptText,
  Settings,
  ScrollText,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

type Props = {};

const NavigationSidebar = (props: Props) => {
  const path = usePathname();

  const [title, setTitle] = useState("");

  useEffect(() => {
    renderHeaderTitle();
  }, [path]);

  const renderHeaderTitle = () => {
    if (path === "/home") {
      setTitle("Welcome, Sana Alex");
    } else if (path === "/clients") {
      setTitle("Clients");
    } else if (path === "/contacts") {
      setTitle("Proposals & Contacts");
    } else if (path === "/invoices") {
      setTitle("Invoices");
    } else if (path === "/settings") {
      setTitle("Settings");
    } else if (path === "/manage-billings") {
      setTitle("Manage Billings");
    }
  };
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full bg-white ">
      <div className="h-36 w-full px-3 text-2xl flex justify-center items-center font-bold">
        <p>Billing </p> <p className=" text-sky-500"> Zero</p>
      </div>
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <Link href={"/home"} className=" w-5/6 h-full">
          <div
            className={` ${
              path === "/home"
                ? "text-sky-700 bg-sky-200 bg-opacity-70"
                : " text-zinc-400"
            } flex items-center rounded-sm  gap-4 font-semibold  px-6 py-4 hover:bg-sky-200 hover:bg-opacity-70 hover:text-sky-700`}
          >
            <Home size={20} />
            <p className="text-sm ">Home</p>
          </div>
        </Link>
        <Link href={"/clients"} className=" w-5/6 h-full">
          <div
            className={` ${
              path === "/clients"
                ? "text-sky-700 bg-sky-200 bg-opacity-70"
                : " text-zinc-400"
            } flex items-center rounded-sm  gap-4 font-semibold  px-6 py-4 hover:bg-sky-200 hover:bg-opacity-70 hover:text-sky-700`}
          >
            <CircleUserRound size={20} />
            <p className="text-sm ">Clients</p>
          </div>
        </Link>
        <Link href={"/contacts"} className="w-5/6 h-full">
          <div
            className={` ${
              path === "/contacts"
                ? "text-sky-700 bg-sky-200 bg-opacity-70"
                : " text-zinc-400"
            } flex items-center rounded-sm  gap-4 font-semibold  px-6 py-4 hover:bg-sky-200 hover:bg-opacity-70 hover:text-sky-700`}
          >
            <NotebookPen size={20} />
            <p className="text-sm ">Contacts</p>
          </div>
        </Link>
        <Link href={"/invoices"} className="w-5/6 h-full">
          <div
            className={` ${
              path === "/invoices"
                ? "text-sky-700 bg-sky-200 bg-opacity-70"
                : " text-zinc-400"
            } flex items-center rounded-sm  gap-4 font-semibold  px-6 py-4 hover:bg-sky-200 hover:bg-opacity-70 hover:text-sky-700`}
          >
            <ReceiptText size={20} />
            <p className="text-sm ">Invoices</p>
          </div>
        </Link>
        <Link href={"/settings"} className="w-5/6 h-full">
          <div
            className={` ${
              path === "/settings"
                ? "text-sky-700 bg-sky-200 bg-opacity-70"
                : " text-zinc-400"
            } flex items-center rounded-sm  gap-4 font-semibold  px-6 py-4 hover:bg-sky-200 hover:bg-opacity-70 hover:text-sky-700`}
          >
            <Settings size={20} />
            <p className="text-sm ">Settings</p>
          </div>
        </Link>
        <Link href={"/manage-billings"} className="w-5/6 h-full">
          <div
            className={` ${
              path === "/manage-billings"
                ? "text-sky-700 bg-sky-200 bg-opacity-70"
                : " text-zinc-400"
            } flex items-center rounded-sm  gap-4 font-semibold  px-6 py-4 hover:bg-sky-200 hover:bg-opacity-70 hover:text-sky-700`}
          >
            <ScrollText size={20} />
            <p className="text-sm ">Manage Billings</p>
          </div>
        </Link>
      </div>
      <div className=" flex items-center justify-center h-full w-full">
        <Card className="flex flex-col items-center justify-center p-8 gap-2">
          {/* <div className="flex flex-col"> */}
          <Avatar className="flex items-center justify-center">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BZ</AvatarFallback>
          </Avatar>
          <CardTitle>Sana Alex</CardTitle>
          <CardDescription>sana@gmail.com</CardDescription>
          <CardContent>
            <Button variant="ghost" className=" text-sky-600">
              <div className=" flex items-center justify-center font-semibold gap-2">
                <p>Logout</p>
                <LogOut size={16} className="text-sm" />
              </div>
            </Button>
          </CardContent>
          {/* </div> */}
        </Card>
      </div>
    </div>
  );
};

export default NavigationSidebar;
