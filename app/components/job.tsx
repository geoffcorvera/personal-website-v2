import { JobDetails } from "../fixtures/jobDetails";
import Tag from "./tag";

export default function Job({ details }: { details: JobDetails }) {
  const { title, company, timePeriod, description, skills } = details;

  return (
    <div className="flex flex-row-reverse justify-end gap-4 py-4 mb-4 last:mb-0 hover:bg-slate-200">
      <div className="max-w-sm md:max-w-md">
        <div className="flex gap-2">
          <h4 className="text-lg font-bold">{title}</h4>
          <span>&#8212;</span>
          <h5 className="text-lg font-bold">{company}</h5>
        </div>
        <p className="font-light text-sm py-2 mb-4">{description}</p>
        {skills && (
          <ul className="flex gap-2 flex-wrap">
            {skills.map((skill) => (
              <li key={skill}>
                <Tag name={skill} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className="min-w-32">{timePeriod}</span>
    </div>
  );
}
