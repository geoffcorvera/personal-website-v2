export default function Tag({ name }: { name: string }) {
    return (<span className="rounded-full bg-slate-200 px-4 py-1 text-slate-800">{name}</span>);
}