import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";

import type { Metadata } from "next";
import { Fugaz_One } from "next/font/google";
import Header from "@/components/Header";
import "./variables.css";
import "./globals.css";

const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DREW.",
  description: "Pleased to meet you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fugazOne.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
