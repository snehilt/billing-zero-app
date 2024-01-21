import ClientsPage from "@/components/clients/clients-page";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-full w-full">
      <ClientsPage />
    </div>
  );
};

export default page;
