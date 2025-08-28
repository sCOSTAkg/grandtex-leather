"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OverlappingCardsProps {
  children: ReactNode[] | ReactNode;
  className?: string;
}

export default function OverlappingCards({
  children,
  className,
}: OverlappingCardsProps) {
  return (
    <div className={cn("flex items-stretch", className)}>
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <div
              key={idx}
              className={cn(
                "shrink-0 w-72 rounded-3xl bg-background shadow-xl overflow-hidden",
                idx !== 0 && "-ml-16",
              )}
              style={{ scrollSnapAlign: "start" }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
