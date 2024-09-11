export default function Tag({ name }: { name: string }) {
  return (
    <span className="rounded-md bg-orange bg-opacity-25 px-4 py-2 text-cream text-sm font-medium">
      {name}
    </span>
  );
}
