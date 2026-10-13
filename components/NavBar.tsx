"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {

    const pathName = usePathname();
    const isActive = (path: string) => pathName === path  
    const navLinks = (path:string) => ` text-xl font-sans text-[#000000] cursor-pointer 
        ${isActive(path) ? "text-primary border-primary border-b-2 font-semibold" : "hover:scale-105 hover:font-semibold transition-transform duration-200"}
    `
    return (
        <nav className="fixed left-0 top-0 z-50 bg-white w-full">
            <div className="max-w-6xl mx-auto px-2 md:px-6 lg:px-8">
                <div className="flex flex-row justify-between items-center p-4">

                    {/* Website Title */}
                    <Link href="/" className="text-2xl font-sans font-semibold text-primary cursor-pointer">Chelsea Zebaze</Link>

                    {/* Navigation Links */}
                    <div className="flex flex-row gap-x-10">
                        <Link href="/about" className={navLinks("/about")}>About</Link>
                        <Link href="/projects" className={navLinks("/projects")}>Projects</Link>
                        <Link href="/contact" className={navLinks("/contact")}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}