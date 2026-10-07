import Link from "next/link";
import Image from "next/image";
import { CircularImage } from "@/components/CircularImage";
import { projectPreviews } from "@/utils/projectPreviews";


export default function Home() {
  const buttonClass = `
    rounded-lg w-full h-full py-2 font-bold text-center border-2
    hover:scale-105 transition-all
  `

  return (
    <div className="px-6 py-20">

      {/* Hero */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Bio */}
        <section className="flex flex-col max-w-2xl">
          <p className="text-primary text-xl font-primary uppercase font-bold" >FullStack/Software Engineer</p>
          <h1 className="text-4xl md:text-5xl mt-4 font-bold">Hello, I&apos;m Chelsea Zebaze.</h1>
          <p className="mt-6 text-lg leading-relaxed">
            I&apos;m a full-stack engineer who builds modern web applications with React,
            Next.js, and TypeScript on the front end, and Python, FastAPI, and
            PostgreSQL on the back end. I care about clean code, fast performance,
            and interfaces people enjoy using.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="/Chelsea-Zebaze-Resume.pdf"
              download
              className={`bg-primary text-white hover:opacity-90 ${buttonClass}`}
            >
              Download Resume
            </a>

            <Link 
              href="https://www.linkedin.com/in/chelsea-zebaze/"
              target="_blank" 
              rel="noopener noreferrer"
              className={` ${buttonClass} `}
            >
              LinkedIn
            </Link>
          </div>
        </section>

        {/* Profile Picture */}
        <div className="w-64 md:w-2/5 shrink-0">
          <CircularImage src="/ProfilePic2.png" alt="Chelsea Zebaze" />
        </div>
      </div>

      {/* Projects Preview */}
      <div className="flex flex-col justify-center items-center mt-24">
        <h2 className="text-4xl font-bold border-b-3 p-2 border-primary">Projects</h2>

        {projectPreviews.map((project) => {
          const link = `#`;
          const projectButtonClass = `
            mt-3 text-center rounded-full w-full sm:w-1/2 py-2 font-semibold border cursor-pointer
            hover:bg-primary hover:text-white transition-all 
          `;
          return (
            <div key={project.title} className="w-full flex flex-col md:flex-row items-center mt-14 border-2 rounded-xl max-h-100 ">


              <div className="flex flex-1 flex-col p-6 justify-center">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-4">{project.description}</p>
                <Link href={link} className={projectButtonClass}>View Project</Link>
              </div>

              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="w-full md:w-1/2 h-64 object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}
