import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal",
});

export const metadata: Metadata = {
  title: "BillingZero",
  description: "Manage your clients with billingZero.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
