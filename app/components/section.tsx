export default function Section({
  children,
  name,
  showSectionTitle = true,
}: {
  name: string;
  children: React.ReactNode;
  showSectionTitle?: boolean;
}) {
  return (
    <section className="flex flex-col pt-4" id={name.toLowerCase()}>
      <h3
        className={
          showSectionTitle ? "text-2xl font-serif" : "hidden"
        }
      >
        {name}
      </h3>
      {children}
    </section>
  );
}
