import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Chart } from "./chart";

type Props = {
  title: string;
  content: string;
};

const ChartCards = ({ title, content }: Props) => {
  return (
    <div>
      <Card className="p-8">
        <div className="px-8 mb-8 space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription className=" text-sky-500">{content}</CardDescription>
        </div>
        <CardContent>
          <Chart />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartCards;
