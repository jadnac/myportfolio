"use client";

import { useEffect, useState } from "react";

type Segment = { text: string; className?: string };

function splitWords(segments: Segment[], step: number) {
  const words: { className?: string; chars: { char: string; delay: number }[] }[] = [];
  let index = 0;

  for (const seg of segments) {
    for (const word of seg.text.split(" ")) {
      if (word === "") continue;
      words.push({
        className: seg.className,
        chars: word.split("").map((char) => {
          const delay = index * step;
          index++;
          return { char, delay };
        }),
      });
      index++; // account for the space between words
    }
  }

  return words;
}

export function AnimatedHeadline({
  segments,
  className = "",
  baseDelay = 0,
  step = 22,
}: {
  segments: Segment[];
  className?: string;
  baseDelay?: number;
  step?: number;
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 30);
    return () => clearTimeout(t);
  }, []);

  const words = splitWords(segments, step);

  return (
    <h1 className={className}>
      {words.map((word, wi) => (
        <span key={wi}>
          <span className="inline-block whitespace-nowrap">
            {word.chars.map((c, ci) => (
              <span
                key={ci}
                style={{ transitionDelay: `${baseDelay + c.delay}ms` }}
                className={`inline-block transition-all duration-500 ease-out ${
                  started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                } ${word.className ?? ""}`}
              >
                {c.char}
              </span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
