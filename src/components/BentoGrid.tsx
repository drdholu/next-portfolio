import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCode,
  IconBriefcase,
  IconSchool,
  IconDeviceLaptop,
  IconHeartHandshake,
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
          // icon={item.icon}
          className={i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const Skeleton = ({ icon }: { icon: React.ReactNode }) => (
  <EvervaultCard text={
    <div className="flex items-center justify-center w-full h-full">
      {icon}
    </div>
  } />
);

const items = [
  {
    title: "Web Development Skills",
    description: "Proficient in multiple languages (C++, Java, etc.) and tech stacks.",
    header: <Skeleton icon={<IconCode className="h-6 w-6 text-neutral-500" />}/>,
    icon: <IconCode className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Key Projects",
    description: "Worked on multiple personal projects and contributed to many.",
    header: <Skeleton icon={<IconDeviceLaptop className="h-6 w-6 text-neutral-500" />}/>,
    icon: <IconDeviceLaptop className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Positions of responsibility",
    description: "Responsible for development of multiple college tech clubs.",
    header: <Skeleton icon={<IconBriefcase className="h-6 w-6 text-neutral-500" />} />,
    icon: <IconBriefcase className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Education",
    description: "Bachelor of Computer Engineering, College of Engineering Pune Technological University (Expected 2026)",
    header: <Skeleton icon={<IconSchool className="h-6 w-6 text-neutral-500" />} />,
    icon: <IconSchool className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Lets Connect",
    description: "hit me up, i dont bite :)",
    header: <Skeleton icon={<IconHeartHandshake className="h-6 w-6 text-neutral-500" />}/>,
    icon: <IconHeartHandshake className="h-6 w-6 text-neutral-500" />,
  },
];