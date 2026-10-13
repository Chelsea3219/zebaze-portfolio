import { keyFeatures } from "@/utils/keyFeatures";
import Image from "next/image";
import Link from "next/link";
import {ArrowRight, ArrowLeft, CircleSmall} from "lucide-react"


export default function ProjectsPage() {
    const buttonClass = `
    rounded-lg w-full h-full py-2 min-w-60 font-bold text-center border-2
    hover:scale-105 transition-all
    `;
    const techTags = ["Python", "TypeScript", "PostgreSQL (Supabase)", "Cloudinary", "Apache Airflow", "Tesseract OCR", "Vercel", "Render", "Next.js", "FastAPI"]
    const nextItems = ["Completing the reading content", "ML-based question recommendations",  "Opening it to more students "]
    const whatILearned = ["Taking a Python pipeline to production", "Mastering NextJS", "Implementing Clerk Authentication"]
    return (
        <div className="max-w-6xl mx-auto mt-12 space-y-10">

            {/* Hero */}
            <section className="flex flex-col items-start">
                <p className="text-muted">Case Study</p>
                <h2 className="text-5xl md:text-7xl font-bold">PrepForward</h2>
                <p className="text-primary-dark text-lg leading-relaxed font-bold">An adaptive SAT learning platform that personalizes practice using each student&apos;s performance data.</p>

                <p className=" text-muted">
                    Founder &amp; Full-Stack Engineer · Dec 2025 – Present
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                    {techTags.map((tag) => (
                        <div key={tag} className="rounded-full bg-primary-light px-2 py-1 text-primary-dark text-sm font-semibold border-primary-dark">
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="flex items-center flex-row gap-x-4 mt-8">
                    <Link 
                        href="https://prepforwardlearning.vercel.app/" 
                        className={`bg-primary-dark border-transparent text-white hover:opacity-80 ${buttonClass}`}
                    >
                        Live Demo
                    </Link>
                    <Link 
                        href="https://github.com/Chelsea3219/sat-website" 
                        className={`${buttonClass}`}
                    >
                        GitHub
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/prepforward/dashboardpage.png"
                        alt={"dashboard screenshot"}
                        width={1200}
                        height={780}
                        className="w-3/4 mt-5 rounded-2xl border-2 border-line"
                    />  
                </div>
            </section>


            {/* The Problem */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    The Problem
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                    Many students struggle to know what to study next for the SAT. Traditional study methods often fail to provide personalized guidance, leading to inefficient preparation and frustration.
                </p>
            </section>


            {/* Solution */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    The Solution
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                    PrepForward addresses this problem by providing an adaptive learning platform that personalizes SAT practice based on each student&apos;s performance data. It tracks accuracy and topic & subtopic mastery to recommend the most relevant practice questions, ensuring efficient and targeted preparation.
                </p>
            </section>


            {/* Key Features */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    Key Features
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {keyFeatures.map((feature) => (
                        <div key={feature.title} className="flex flex-col">
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-1 text-muted">{feature.description}</p>
                            {feature.imageURL && (
                                <div className="mt-auto pt-2 hidden md:block">
                                    <div className="relative aspect-4/3 w-full h-full rounded-2xl bg-primary/5 border-line ">
                                        <div className=" w-full h-full">
                                            <Image
                                                src={feature.imageURL}
                                                alt={feature.title}
                                                fill 
                                                sizes="(min-width: 768px) 33vw, 100vw"
                                                className="object-contain"
                                            /></div>
                                    </div>

                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* What I Learned */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    What I Learned
                </h2>
                <div className="mt-4 gap-4">
                    {whatILearned.map((item, index) => (
                        <div key={index} className="flex items-center flex-row ml-4 ">
                            <p className="text-2xl font-bold mr-2 text-primary">{index+1}.</p>
                            <p className="leading-relaxed text-lg">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What next */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    What&apos; Next
                </h2>

                <div className="mt-4">
                    {nextItems.map((item) => (
                        <div key={item} className="flex items-center flex-row ml-4">
                            <CircleSmall className="w-4 h-4 mr-2 text-primary" fill="currentColor"/>
                            <p className="leading-relaxed text-lg">{item}</p>
                        </div>
                    ))}
                </div>

            </section>

            {/* Footer */}
            <div className="flex justify-center">
                <section className="flex items-center justify-center gap-x-10 max-w-3xl">
                    <div className={`bg-primary border-transparent text-white hover:opacity-80 ${buttonClass} space-x-2`}>
                        <ArrowLeft className="inline-block" />
                        <Link 
                            href="/projects"
                        >
                            Back to Projects
                        </Link>
                    </div>
                    <div className={`bg-primary border-transparent text-white hover:opacity-80 ${buttonClass} space-x-2`}>
                        <Link 
                            href="/projects/mapsmode"
                        >
                            Next Project: MapsMode
                        </Link>
                        <ArrowRight className="inline-block" />
                    </div>
                </section>
            </div>
        </div>
    );
}