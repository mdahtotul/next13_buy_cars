import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buy Car - Home",
  description: "Discover and buy cars from trusted dealerships.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative`} suppressHydrationWarning={true}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
