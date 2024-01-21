"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, LogOut } from "lucide-react";

type Props = {};

const NavigationHeader = (props: Props) => {
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

  console.log(path, "---- path");
  return (
    <div className="text-lg font-semibold text-center  px-12 flex items-center justify-between h-16 ">
      <div className="text-xl font-semibold">{title}</div>
      <div className="flex gap-8">
        <div>
          <Button variant="secondary" className=" rounded-full text-sky-600">
            <Bell size={20} />
          </Button>
        </div>
        <div>
          <Card className="flex  items-center justify-center border-none  gap-2">
            {/* <div className="flex flex-col"> */}
            <div>
              <Avatar className="flex items-center justify-center">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BZ</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <CardTitle className="text-sm">Sana Alex</CardTitle>
              <CardDescription className="text-xs">
                sana@gmail.com
              </CardDescription>
            </div>
            <div>
              {/* <CardContent> */}
              <Button variant="ghost" className=" text-sky-600">
                <ChevronDown size={16} className="text-sm" />
              </Button>
              {/* </CardContent> */}
            </div>
            {/* </div> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
