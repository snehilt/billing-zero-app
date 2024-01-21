"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>
        Welcome to Billing<span className="text-sky-500">Zero.</span>
      </h2>
    </main>
  );
}
