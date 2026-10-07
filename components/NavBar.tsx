import Link from "next/link";


export default function Navbar() {

    const navLinks = `
        text-xl font-sans text-[#000000] border-b-2 border-transparent
        hover:text-primary hover:border-primary cursor-pointer hover:scale-105 transition-transform duration-200
        `

    return (
        <nav className="fixed left-0 top-0 z-50 bg-white w-full">
            <div className="max-w-6xl mx-auto px-2 md:px-6 lg:px-8">
                <div className="flex flex-row justify-between items-center p-4">

                    {/* Website Title */}
                    <p className="text-2xl font-sans font-semibold text-[#000000]">Chelsea Zebaze</p>

                    {/* Navigation Links */}
                    <div className="flex flex-row gap-x-10">
                        <Link href="/about" className={navLinks}>About</Link>
                        <Link href="/projects" className={navLinks}>Projects</Link>
                        <Link href="/contact" className={navLinks}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}