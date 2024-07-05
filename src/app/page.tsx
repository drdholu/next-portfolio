import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { motion } from "framer-motion";
import { Landing } from "@/components/Landing";
export default function Home() {
  return (
    <HeroHighlight>
      <main className="font-sans">
        {/* <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        /> */}
        <Landing />
      </main>
    </HeroHighlight>
  );
}
