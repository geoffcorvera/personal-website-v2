import Header from "./components/header";
import Job from "./components/job";
import Section from "./components/section";

const jobDetails = [
  {
    title: "QA Engineer",
    company: "IDEMIA",
    timePeriod: "2021 - 2024",
    description: `Created new test automation frameworks from scratch, used to speed
    development of integration and end-to-end testing across multiple
    web-based products. Developed and maintained 500+ integration, API,
    and end-to-end test cases. Created functional tests for shared APIs,
    increase code coverage across multiple teams and products. Integrated
    test execution and reporting into CI/CD pipelines.`,
  },
  {
    title: "QA & Accessibility Analyst",
    company: "CollegeNET",
    timePeriod: "2015 - 2020",
    description: `Created new test automation frameworks from scratch, used to speed
    development of integration and end-to-end testing across multiple
    web-based products. Developed and maintained 500+ integration, API,
    and end-to-end test cases. Created functional tests for shared APIs,
    increase code coverage across multiple teams and products. Integrated
    test execution and reporting into CI/CD pipelines.`,
  },
  {
    title: "UX Researcher",
    company: "CIBC",
    timePeriod: "2014",
    description: `Created new test automation frameworks from scratch, used to speed
    development of integration and end-to-end testing across multiple
    web-based products. Developed and maintained 500+ integration, API,
    and end-to-end test cases. Created functional tests for shared APIs,
    increase code coverage across multiple teams and products. Integrated
    test execution and reporting into CI/CD pipelines.`,
  },
];

const aboutCopy = `I help teams deploy reliable and usable software and interfaces through a combination of strategic test planning, automation, accessibility auditing and user experience research. The ways technology enables, or gets in our way, fascinates me. It’s a privilege to play a role in keeping software a positive aspect of people’s lives.`;

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl">
      <div className="flex justify-between gap-4">
        <Header />
        <main className="min-h-fit w-1/2 flex flex-col gap-28 lg:pt-36 lg:pb-36">
          <Section name="About" showSectionTitle={false}>
            <p className="text-lg font-light">{aboutCopy}</p>
          </Section>
          <Section name="Experience">
            {jobDetails.map((job) => {
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
