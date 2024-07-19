import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paraloans",
  description:
    "App created using Next.js and Express.js to serve as an example of a multi-step form in offering loans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qrl5ogo.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
