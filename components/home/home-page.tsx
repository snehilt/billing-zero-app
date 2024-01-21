import React from "react";
import { Chart } from "./chart";
import ChartCards from "./chart-cards";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const HomePage = (props: Props) => {
  // const router = useRouter();
  return (
    <div className="h-full w-full p-16">
      <div className="grid gap-8 md:grid-cols-2">
        <Link href={"/clients"} className="cursor-pointer">
          <ChartCards title="Total Revenue" content=" $12,2564.256" />
        </Link>
        <Link href={"/clients"} className="cursor-pointer">
          <ChartCards title="Total Clients" content="Count: 25" />
        </Link>
        <Link href={"/invoices"} className="cursor-pointer">
          <ChartCards title="Invoices" content="Revenue: $12,2564.256" />
        </Link>
        <Link href={"/contacts"} className="cursor-pointer">
          <ChartCards
            title="Active Recurring Contract Revenue"
            content=" Revenue: $12,2564.256 "
          />
        </Link>
        <Link href={"/contacts"} className="cursor-pointer">
          <ChartCards title="Active Contracts" content="Count: 15" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
