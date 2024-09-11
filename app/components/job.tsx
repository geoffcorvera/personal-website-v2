interface JobDetails {
    title: string;
    company: string;
    timePeriod: string;
    description: string;
}

export default function Job({details}: {details: JobDetails}) {
  const {title, company, timePeriod, description} = details;

  return (
    <div className="flex flex-row-reverse justify-end gap-4 py-12">
      <div className="max-w-sm md:max-w-md">
        <div className="flex gap-2">
          <h4 className="text-lg font-bold">{title}</h4>
          <span>&#8212;</span>
          <h5 className="text-lg font-bold">{company}</h5>
        </div>
        <p className="font-light text-slate-800 pt-1">{description}</p>
      </div>
      <span className="min-w-32">{timePeriod}</span>
    </div>
  );
}


