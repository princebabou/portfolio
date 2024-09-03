import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"],weight: '500' });

export const metadata: Metadata = {
  title: "Babou",
  description: "Babou's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
