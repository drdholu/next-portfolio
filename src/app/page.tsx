import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { motion } from "framer-motion";
import { Landing } from "@/components/Landing";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
        {/* <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        /> */}
        <Landing />
    </NextUIProvider>
  );
}
