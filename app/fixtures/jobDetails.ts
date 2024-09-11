export interface JobDetails {
    title: string;
    company: string;
    timePeriod: string;
    description: string;
    skills?: string[];
}

export const jobs: JobDetails[] = [
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
      skills: ["Selenium", "Playwright", "AWS", "React"]
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
      skills: ["Protractor", "Angular","JIRA", "WCAG"]
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