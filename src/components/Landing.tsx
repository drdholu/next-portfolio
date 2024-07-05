"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import { BentoGridDemo } from "./BentoGrid";
export function Landing() {
    const words = ["mern dev?", "producer", "student"];
    return (
        // <HeroHighlight>
        <div className="flex md:flex-row flex-col items-center justify-evenly h-screen p-10">

            <motion.h1
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            exit={{
                opacity: 0,
                // y: -40,
                // x: 40,
                filter: "blur(8px)",
                scale: 0,
                position: "absolute",
              }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left"
            >
            Hi, I&apos;m <br/>
            Paras Dhole
            <br />
            {/* <Highlight className="">
                A <FlipWords words={words} /> 
            </Highlight> */}
            </motion.h1>
            <div>
                <BentoGridDemo />
            </div>
        </div>
        // </HeroHighlight>
    );
}
