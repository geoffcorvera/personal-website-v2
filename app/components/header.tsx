import LinkRow from "./link-row";

const sections = ["about", "experience", "projects", "contact"];

export default function Header() {
  return (
    <header className="lg:flex lg:top-0 lg:flex-col justify-between lg:w-1/2 lg:max-w-lg lg:min-h-screen">
      <div>
        <h1 className="text-5xl font-bold">Geoffrey Corvera</h1>
        <p className="text-xl font-semibold py-5 opacity-70">
          Quality Assurance Engineer
        </p>
        <p className="text-lg opacity-55">
          I help teams develop accessible, user-friendly, and reliable web
          applications.
        </p>
        <nav aria-label="section links">
          <ul className="mt-10 w-max">
            {sections.map((section) => {
              return (
                <li key={section}>
                  <a href={`#${section.toLowerCase()}`} className="py-2 flex">
                    {section}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <LinkRow />
    </header>
  );
}
