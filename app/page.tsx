"use client";

import Header from "./components/header";
import Job from "./components/job";
import Section from "./components/section";
import { jobs } from "./fixtures/jobDetails";
import { useEffect, useState } from "react";

const SECTIONS = ["about", "experience", "projects", "contact"];
const aboutCopy = `I help teams deploy reliable and usable software and interfaces through a combination of strategic test planning, automation, accessibility auditing and user experience research. The ways technology enables, or gets in our way, fascinates me. It’s a privilege to play a role in keeping software a positive aspect of people’s lives.`;

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState<string>(SECTIONS[0]);

  const scrollYInSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const top = section?.offsetTop;
    const height = section?.offsetHeight;
    return top && height && scrollY >= top && scrollY <= top + height;
  };

  useEffect(() => {
    document.addEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  useEffect(() => {
    setActive(SECTIONS.find(scrollYInSection) ?? SECTIONS[0]);
  }, [scrollY]);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl">
      <div className="flex justify-between gap-4">
        <Header activeSection={active} sections={SECTIONS} />
        <main className="min-h-fit w-1/2 flex flex-col gap-32 lg:pt-36 lg:pb-36">
          <Section name="About" showSectionTitle={false}>
            <p className="text-lg font-light">{aboutCopy}</p>
          </Section>
          <Section name="Experience">
            {jobs.map((job) => {
              return <Job key={job.title + job.company} details={job} />;
            })}
          </Section>
          <Section name="Projects">
            <p>Coming soon...</p>
          </Section>
          <Section name="Contact">
            <p>Coming soon...</p>
          </Section>
        </main>
      </div>
    </div>
  );
}
