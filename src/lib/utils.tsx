import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function that merges and applies class names.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));  // Ensure this returns a string.
}
