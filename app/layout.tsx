import type { Metadata } from "next";
import { Geist, Geist_Mono, Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heebo",
});

import Navbar from "../components/NavBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Work Portfolio",
  description: "Created by Chelsea Zebaze",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="w-full max-w-6xl mx-auto">
          <div className="pt-20 pb-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
