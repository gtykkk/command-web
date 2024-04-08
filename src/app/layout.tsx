import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모든 명령어를 한 곳에서!",
  description: "모든 명령어를 한 곳에서!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="mt-auto">
      <body>
        <Topbar />
        <main className="min-h-screen flex flex-col relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
