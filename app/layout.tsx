import type { Metadata } from "next";
import { Geist, Geist_Mono, Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";


const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heebo",
});


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
      <body className="min-h-full flex flex-col bg-[#FFF8F5]">
        <Navbar />

        <main className=" pt-20 pb-20 ">
          <div className="flex-1 w-full max-w-6xl mx-auto">
            {children}
          </div>
        </main>

        <div className="flex-1">
          <Footer />
        </div>

      </body> 
    </html>
  );
}
