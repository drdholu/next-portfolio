import React from "react";

import {
  IconCode,
  IconBriefcase,
  IconSchool,
  IconDeviceLaptop,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";


const Skeleton = ({ icon }: { icon: React.ReactNode }) => (
  <EvervaultCard text={
    <div className="flex items-center justify-center w-full h-full">
      {icon}
    </div>
  } />
);

const info = {
    "Skills": {
      "description": "Technical skills including web development, programming languages, and database management.",
      "details": [
        {
          "name": "Web Development",
          "technologies": ["React", "ExpressJs", "NodeJs", "Tailwind CSS"]
        },
        {
          "name": "Programming Languages",
          "technologies": ["JavaScript", "Java", "TypeScript", "C", "C++"]
        },
        {
          "name": "Databases",
          "technologies": ["MongoDB", "Firebase", "SQL", "Prisma ORM"]
        }
      ],
      header: <Skeleton icon={<IconCode className="h-6 w-6 text-neutral-500" />}/>,
      link: "/skills"
    },
    "Projects": {
      "description": "Significant projects demonstrating experience and expertise in various technologies.",
      "details": [
        {
          "name": "Unified Student Portal",
          "status": "Ongoing",
          "description": "Architected a portal for document management for students and faculty, with robust authentication and a scalable solution using MERN stack.",
          "technologies": ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"]
        },
        {
          "name": "Paint Store App",
          "status": "Ongoing",
          "description": "Developed a comprehensive paint store ecosystem with customer and salesman apps, a web-admin interface, real-time inventory tracking, and order management features.",
          "technologies": ["ExpressJS", "NodeJS", "ReactJS", "React-Native", "Firebase Firestore"]
        },
        {
          "name": "Dynamic Allocation CLI using van Emde Boas Trees",
          "status": "Completed",
          "description": "Implemented van Emde Boas trees in C to improve operation times and engineered a dynamic application for efficient seat allocation.",
          "technologies": ["C"]
        }
      ],
      header: <Skeleton icon={<IconDeviceLaptop className="h-6 w-6 text-neutral-500" />}/>,
      link: "/projects"
    },
    "Positions of Responsibility": {
      "description": "Roles undertaken demonstrating leadership and contribution to significant projects.",
      "details": [
        {
          "position": "Software Developer",
          "organization": "Software Development Section, COEP Pune",
          "duration": "Aug 2023 - Present",
          "responsibilities": [
            "Developing the Student Portal using the MERN stack.",
            "Contributing to merit list generation and student seat allocation algorithms for COEP’s MTech admission portal."
          ]
        }
      ],
      header: <Skeleton icon={<IconBriefcase className="h-6 w-6 text-neutral-500" />} />,
      link: "/positions"
    },
    "Education": {
      "description": "Academic background and achievements.",
      "details": [
        {
          "degree": "Bachelor of Computer Engineering",
          "institution": "College of Engineering Pune Technological University",
          "expected_graduation": "2026",
          "cgpa": "7.38/10"
        }
      ],
      header: <Skeleton icon={<IconSchool className="h-6 w-6 text-neutral-500" />} />,
      link: "/education"
    },
    "Contact": {
      "description": "hit me up, i don't bite :)",
      "details": {
        "phone": "+91-84212-70069",
        "location": "Pune, India",
        "linkedin": "linkedin.com/in/parasdhole",
        "github": "github.com/drdholu"
      },
      header: <Skeleton icon={<IconHeartHandshake className="h-6 w-6 text-neutral-500" />}/>,
      link: "/contact"
    }
}

export default info;