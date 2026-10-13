"use client"

import CIcon from "@coreui/icons-react";
import { cibLinkedin, cibGithub, cibGmail } from "@coreui/icons";


const SocialMediaIcons = [
    { icon: cibLinkedin, href: "https://www.linkedin.com/in/chelsea-zebaze/", label: "LinkedIn" },
    { icon: cibGithub, href: "https://github.com/Chelsea3219", label: "GitHub" },
    { icon: cibGmail, href: "mailto:chelseadonchi@gmail.com", label: "Gmail" }
]
export default function Footer() {
    return (
        <div className="relative w-screen">
            <footer className="flex flex-col items-center justify-center py-4 bg-white">
                
                <div className="flex flex-row gap-x-8">
                    {SocialMediaIcons.map((social) => (
                        <a 
                            key={social.label} 
                            href={social.href} 
                            {...(social.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                            aria-label={social.label}
                        >
                            <CIcon icon={social.icon} className="w-8 h-8  fill-current hover:text-primary hover:scale-105 transition-all" />
                        </a>
                    ))}
                </div>

                <p className="mt-4 text-center text-sm text-muted">© 2026 Chelsea Zebaze. All rights reserved.</p>

            </footer>
        </div>
    );
}