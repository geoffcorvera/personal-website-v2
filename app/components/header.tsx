import LinkRow from "./link-row";

export default function Header({ activeSection, sections }: { activeSection: string, sections: string[] }) {
  return (
    <header className="lg:flex lg:sticky lg:top-0 lg:flex-col justify-between w-1/2 lg:max-w-xl h-screen lg:min-h-screen">
      <div className="lg:py-36">
        <h1 className="text-5xl font-serif font-semibold">Geoffrey Corvera</h1>
        <p className="text-xl font-serif py-5 opacity-70">QA Engineer</p>
        <p className="text-lg opacity-55">
          I help teams deliver reliable, accessible, and user-friendly.
        </p>
        <nav aria-label="section links">
          <ul className="mt-10 w-max flex flex-col gap-4">
            {sections.map((section) => {
              return (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className={`${section == activeSection && "active "}py-2 uppercase`}
                  >
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mb-36">
        <LinkRow />
      </div>
    </header>
  );
}
