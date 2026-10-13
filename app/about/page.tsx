
import { CircularImage } from "@/components/CircularImage";
import {strengths, background, nowItems} from "@/components/About";
import {ArrowRight} from "lucide-react";


export default function About() {
    
    return (
        <div className="px-6 py-16">

            {/* Intro */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-12">
                <div className="w-56 md:w-1/3 shrink-0">
                <CircularImage src="/ProfilePic2.png" alt="Chelsea Zebaze" />
                </div>

                <div className="flex-1">
                <p className="text-primary-dark text-xl uppercase font-bold">About Me</p>
                <h1 className="text-4xl md:text-5xl mt-4 font-bold">
                    Hi, I&apos;m Chelsea.
                </h1>
                <p className="mt-4 text-lg leading-relaxed">
                    I&apos;m a software engineer based in New Jersey who loves turning messy,
                    real-world data into products people can actually use. I work across the
                    stack, from Python and FastAPI services and PostgreSQL databases to React
                    and Next.js interfaces, and I&apos;m currently looking for a full-time role
                    in software, full-stack, or data engineering.
                </p>
                </div>
            </section>

            {/* Story */}
            <section className="mt-24 max-w-3xl">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                How I Got Here
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                I studied mathematics at Case Western Reserve University, where I fell in love
                with modeling problems and finding patterns in data. My senior capstone,
                MapsModes, changed how I saw that work: our team set out to measure how
                walkable and bikeable Cleveland really is, and I led the Bike Score model.
                Turning equations into a pipeline that pulled in Census, OpenStreetMap, and
                elevation data, and then seeing it light up as an interactive map, showed me
                how much I enjoy building the systems behind the numbers.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                After graduating, I wanted to build something of my own from scratch. Years of
                tutoring SAT math showed me how much students struggle to know what to study
                next, so I built PrepForward, an adaptive SAT learning platform that tracks
                accuracy and topic mastery to personalize practice. It brought everything
                together: data pipelines, database design, backend APIs, and a frontend
                students enjoy using.
                </p>
            </section>

            {/* Strengths */}
            <section className="mt-24">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                What I Bring
                </h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {strengths.map((item) => (
                        <div
                        key={item.title}
                        className="rounded-xl border-2 border-line bg-white p-6"
                        >
                        <h3 className="text-xl font-bold text-primary-dark">{item.title}</h3>
                        <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Background */}
            <section className="mt-24">
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                Background
                </h2>
                <ul className="mt-8 grid gap-6 md:grid-cols-3">
                    {background.map((item) => (
                        <li key={item.place} className="border-l-4 border-primary pl-4">
                        <p className="text-xl font-bold">{item.place}</p>
                        <p>{item.role}</p>
                        <p className="text-sm text-muted">{item.dates}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Personal */}
            <section className="mt-24 grid gap-12 md:grid-cols-2">
                <div>
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    Outside of Code
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                    When I&apos;m not coding, you&apos;ll probably find me out on a walk or a hiking trail, 
                    trying a new recipe in the kitchen, or lost in a fantasy novel. I&apos;m also always in 
                    the middle of an Asian drama, and I&apos;m happy to give recommendations.
                </p>
                </div>

                <div>
                <h2 className="text-3xl font-bold border-b-3 border-primary inline-block pb-2">
                    What I&apos;m Doing Now
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-lg">
                    {nowItems.map((item) => (
                    <li key={item} className="flex gap-3">
                        <ArrowRight className="text-primary" />
                        {item}
                    </li>
                    ))}
                </ul>
                </div>
            </section>

        </div>
    );
}