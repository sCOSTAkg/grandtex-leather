import Image from "next/image";

export default function ProductCard({
  title,
  collection,
  type,
  finish,
  href,
  image,
}: {
  title: string;
  collection?: string;
  type?: string;
  finish?: string;
  href: string;
  image: string;
}) {
  return (
    <a href={href} className="group relative overflow-hidden rounded-xl bg-secondary">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={800}
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="text-sm text-muted-foreground">{collection}</div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="mt-2 text-sm text-muted-foreground">
          {type} • {finish}
        </div>
      </div>
    </a>
  );
}
