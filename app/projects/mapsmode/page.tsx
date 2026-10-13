
import { mapmodeLearnedLessons, whatsNext, solutionQuestions, keyMapsModeFeatures} from "@/utils/mapsmode";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CircleSmall} from "lucide-react"


export default function MapsModePage() {
    const buttonClass = `
    rounded-lg w-full h-full py-2 min-w-60 font-bold text-center border-2
    hover:scale-105 transition-all
    `;
    const techTags = ["Python", "GeoPandas", "OSMnx", "NetworkX", "rasterio", "FastAPI", "AWS Lambda", "S3", "API Gateway", "React", "Mapbox GL JS"]
    return (
        <div className="max-w-6xl mx-auto mt-12 space-y-10">

            {/* Hero */}
            <section className="flex flex-col items-start">
                <p className="text-muted">Case Study · Capstone Project</p>
                <h2 className="text-5xl md:text-7xl font-bold">MapsMode</h2>
                <p className="text-primary-dark text-lg leading-relaxed font-bold">
                    A city-scale mobility analytics platform that scores how walkable, bikeable, and transit-accessible every part of Cleveland really is.
                </p>

                <p className=" text-muted">
                    Bike Accessibility Lead · 5-person team · Case Western Reserve University · Aug – Dec 2025
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                    {techTags.map((tag) => (
                        <div key={tag} className="rounded-full bg-primary-light px-2 py-1 text-primary-dark text-sm font-semibold border-primary-dark">
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="flex items-center flex-row gap-x-4 mt-8">
                    <a
                        href="/mapsmode/capestone-report.pdf"
                        download
                        className={`bg-primary-dark border-transparent text-white hover:opacity-80 ${buttonClass}`}
                        >
                        Read the Report
                    </a>

                    <Link 
                        href="https://github.com/Chelsea3219/Mapmodes-Cleveland" 
                        className={`${buttonClass}`}
                    >
                        GitHub
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/mapsmode/mapsmode.png"
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
                    The United States is built around cars, and Cleveland is no exception. The city has bike-share and scooter 
                    options like Bird and Veo, plus a growing network of bikeways, but very few residents walk or bike to work. 
                    PeopleForBikes ranks Cleveland&apos;s bike network 528th in the U.S., citing poor connections to homes, jobs, 
                    schools, transit, and essential services like hospitals and grocery stores.
                </p>
                <p className="mt-2 text-lg leading-relaxed">
                    The city&apos;s Cleveland Moves plan aims to change that with 50 miles of new high-comfort bikeways, safer crosswalks, 
                    and more mobility hubs. But there was no single place to see how accessible each neighborhood actually is today, or 
                    where new infrastructure would make the biggest difference. The data existed, scattered across the Census, OpenStreetMap, 
                    transit feeds, and city datasets, but nobody had combined it into one clear picture.
                </p>
                
            </section>


            {/* Solution */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    The Solution
                </h2>
                <div className="mt-4 space-y-2">
                    <p>MapsModes bring that data together into a unified scoring framework and an interactive map. It answers three questions: </p>
                    <div className="list-disc pl-5 mt-2">
                        {solutionQuestions.map((question, index) => (
                            <div key={index} className="mb-2 flex flex-row space-x-2">
                                <p>{index + 1}.</p>
                                <span className="font-semibold">{question.title}</span>
                                <p>{question.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="leading-relaxed">
                        We computed four metrics (Bike Score, Walk Score, Route-Level Mobility Score, and Transit Score), ran them through 
                        an automated cloud pipeline on AWS, and published the results to a web map that planners, residents, and students
                        can explore with any technical background. 
                    </p>
                    <p className="leading-relaxed">
                        As Bike Accessibly Lead, I designed and built the bike score, from the scoring model and geospatial data pipeline to route level extension.
                    </p>
                </div>
            </section>


            {/* Key Features */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    Key Features
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10">
                    {keyMapsModeFeatures.map((feature) => (
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

            {/* Conclusion*/}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    Conclusion
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                    Accessibility is strong downtown and along core corridors like University Circle, where walking, biking, and 
                    transit infrastructure are dense and connected. Large parts of the city are transit deserts, though, and some 
                    dense neighborhoods still have fragmented walk and bike networks. Our conclusion was that Cleveland&apos;s car dependence 
                    isn&apos;t just a habit. It&apos;s built into the city&apos;s infrastructure.
                </p>
            </section>

            {/* What I Learned */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    What I Learned
                </h2>
                <div className="mt-4 gap-4">
                    {mapmodeLearnedLessons.map((item, index) => (
                        <div key={index} className="flex flex-row ml-4 space-y-2">
                            <p className="text-2xl font-bold mr-2 text-primary">{index+1}.</p>
                            <div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="leading-relaxed text-lg">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What next */}
            <section className="">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    What&apos;s Next
                </h2>

                <div className="mt-4">
                    <ul>
                        {whatsNext.map((item, index) => (
                            <li key={index} className="flex flex-row ml-4 gap-4">
                                <CircleSmall className="mt-2 w-4 h-4 text-primary shrink-0" fill="currentColor"/>
                                <div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="leading-relaxed text-lg">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
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
                    
                    {/* Add a button if you decide to link to the next project*/}
                </section>
            </div>
        </div>
    );
}