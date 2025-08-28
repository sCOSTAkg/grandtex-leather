import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Склейка tailwind-классов без конфликтов */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
