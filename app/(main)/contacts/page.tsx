import ContactsPage from "@/components/contacts/contacts-page";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-full w-full">
      <ContactsPage />
    </div>
  );
};

export default page;
