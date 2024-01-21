import InvoicePage from "@/components/invoice/invoice-page";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-full w-full">
      <InvoicePage />
    </div>
  );
};

export default page;
