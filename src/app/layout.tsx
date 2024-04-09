import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모든 명령어를 한 곳에서!",
  description: "모든 명령어를 한 곳에서!",
};

export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
    <html className="">
      <body>
        <Topbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
