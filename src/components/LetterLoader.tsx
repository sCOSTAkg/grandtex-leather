"use client";

interface LetterLoaderProps {
  text: string;
  className?: string;
}

export default function LetterLoader({
  text,
  className = "",
}: LetterLoaderProps) {
  return (
    <div className={className} aria-label={text}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-letter-reveal"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
