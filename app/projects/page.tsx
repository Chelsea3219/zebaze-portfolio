import { projectPreviews } from "@/utils/projectPreviews";
import Image from "next/image";
import Link from "next/link";


export default function ProjectsPage() {
    const projectButtonClass = `
        mt-3 text-center rounded-full w-full sm:w-1/2 py-2 font-semibold border cursor-pointer
        hover:bg-primary hover:text-white transition-all 
    `;
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-20">
                <h2 className="text-4xl font-bold border-b-3 p-2 border-primary">Projects</h2>

                {projectPreviews.map((project) => (
                    <div
                    key={project.title}
                    className="w-full flex flex-col md:flex-row items-center mt-14 border-2 border-line bg-white rounded-xl overflow-hidden"
                    >
                    {/* Projects Title, Description, and Button */}
                    <div className="flex flex-1 flex-col p-6 justify-center">
                        <div className="gap-x-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-primary-dark font-semibold">{project.subtitle}</p>
                        </div>
                        <p className="mt-4 text-muted">{project.description}</p>
                        <Link href={project.link} className={projectButtonClass}>View Project</Link>
                    </div>

                    {/* Projects Image */}
                    <Image
                        src={project.image}
                        alt={`${project.title} dashboard screenshot`}
                        width={1200}
                        height={780}
                        className="w-full md:w-1/2 h-90 object-cover object-top-left md:border-l-2 border-line"
                    />
                    </div>
                ))}
            </div>
        </div>
    );
}