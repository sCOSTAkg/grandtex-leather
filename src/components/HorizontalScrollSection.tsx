"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function HorizontalScrollSection({
  children,
  className,
}: HorizontalScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft >= maxScroll && e.deltaY > 0;
      if (!atStart && !atEnd) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("flex overflow-x-auto gap-6 scroll-smooth", className)}
      style={{ scrollSnapType: "x mandatory" }}
    >
      {children}
    </div>
  );
}
