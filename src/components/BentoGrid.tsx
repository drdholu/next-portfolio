import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCode,
  IconDatabase,
  IconBriefcase,
  IconSchool,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { EvervaultCard } from "./ui/evervault-card";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const Skeleton = () => (
    <EvervaultCard text="text" />
);

const items = [
  {
    title: "Web Development Skills",
    description: "Proficient in HTML5, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, Django, React-Native",
    header: <Skeleton />,
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Database Expertise",
    description: "Experience with MongoDB, Firebase, SQLite, SQL",
    header: <Skeleton />,
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Software Developer Experience",
    description: "Developed a Student Portal using MERN stack at COEP Pune",
    header: <Skeleton />,
    icon: <IconBriefcase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Education",
    description: "Bachelor of Computer Engineering, College of Engineering Pune Technological University (Expected 2026)",
    header: <Skeleton />,
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Key Projects",
    description: "Unified Student Portal, Paint Store App, Dynamic Allocation Framework using van Emde Boas Trees",
    header: <Skeleton />,
    icon: <IconDeviceLaptop className="h-4 w-4 text-neutral-500" />,
  },
];