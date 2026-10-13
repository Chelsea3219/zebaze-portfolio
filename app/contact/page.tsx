import Link from "next/link";


export default function ContactPage() {
    const buttonClass = `
        rounded-lg py-2 px-6 font-bold text-center border-2 bg-white border-foreground
        hover:font-semibold hover:border-primary hover:text-primary-dark transition-all hover:scale-105
    `;

    return (
        <>

            {/* Contact */}
            <section className="mt-24 rounded-2xl bg-primary-light p-8 md:p-12 text-center">
                <h2 className="text-4xl md:text-5xl text-primary-dark font-bold">Let&apos;s Work Together</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                I&apos;m looking for full-time roles in software, full-stack, backend, or data
                engineering. If you think I&apos;d be a good fit for your team, I&apos;d love to
                hear from you.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="mailto:chelseadonchi@gmail.com"
                    className={buttonClass}
                >
                    Email Me
                </a>
                <Link
                    href="https://www.linkedin.com/in/chelsea-zebaze/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                >
                    LinkedIn
                </Link>
                <Link
                    href="https://github.com/Chelsea3219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass}
                >
                    GitHub
                </Link>
                <a
                    href="/Chelsea-Zebaze-Resume.pdf"
                    download
                    className={buttonClass}
                >
                    Resume
                </a>
                </div>
            </section>
        </>
    );
}