import React from "react";
import MainLayout from "../layout";
import HomePage from "@/components/home/home-page";

type Props = {};

const page = (props: Props) => {
  return (
    // <MainLayout>
    <div className="flex h-full w-full">
      <HomePage />
    </div>
    // </MainLayout>
  );
};

export default page;
