"use client";

import { motion } from "framer-motion";
import { FUTURE_GOALS, TIMELINE } from "@/lib/constants";
import { H2, Paragraph } from "../ui/typography";
import Link from "next/link";
import type { JSX } from "react";

interface TimelinePeriod {
  age: string;
  events: string[];
}

interface TimelineItemProps {
  period: TimelinePeriod;
  index: number;
  isLast: boolean;
}

const renderEventWithLinks = (text: string): (string | JSX.Element)[] => {
  // Updated regex to match Markdown-style links
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <Link
        target="_blank"
        key={match.index}
        href={match[2]}
        className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        rel="noopener noreferrer"
      >
        {match[1]}
      </Link>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const TimelineItem = ({
  period,
  index,
  isLast,
}: TimelineItemProps): JSX.Element => {
  const isCurrentPeriod = period.age === "Now";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-14 pb-12 last:pb-0"
    >
      {!isLast && (
        <div
          className="absolute left-5 top-0 h-full border-l border-dashed border-neutral-200"
          aria-hidden="true"
        />
      )}

      <div className="absolute left-0 top-0">
        <div
          className={`
            flex items-center justify-center w-10 h-6 
            border text-xs font-medium shrink-0
            ${
              isCurrentPeriod
                ? "bg-neutral-700 text-neutral-50 border-neutral-500"
                : "bg-white text-neutral-600 border-neutral-200"
            }
          `}
        >
          {period.age}
        </div>
      </div>

      <div className="space-y-4 break-words">
        {period.events.map((event, i) => (
          <Paragraph key={i} className="max-w-full">
            {renderEventWithLinks(event)}
          </Paragraph>
        ))}
      </div>
    </motion.div>
  );
};

const FutureGoalsSection = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: TIMELINE.length * 0.1 }}
      className="pt-2"
    >
      <H2 className="mb-2">Future Goals</H2>
      <div className="space-y-2">
        {FUTURE_GOALS.map((goal, i) => (
          <Paragraph key={i}>
            {`>`} {goal}
          </Paragraph>
        ))}
      </div>
    </motion.div>
  );
};

export default function Timeline(): JSX.Element {
  const sortedTimeline = [...TIMELINE].sort((a, b) => {
    if (a.age === "Now") return 1;
    if (b.age === "Now") return -1;
    return Number.parseInt(a.age) - Number.parseInt(b.age);
  });

  return (
    <section className="max-w-2xl mx-auto">
      <div className="space-y-8">
        <div>
          <H2>Journey</H2>
          <div className="relative mt-6">
            <div>
              {sortedTimeline.map((period, index) => (
                <TimelineItem
                  key={period.age}
                  period={period}
                  index={index}
                  isLast={index === sortedTimeline.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <FutureGoalsSection />
      </div>
    </section>
  );
}
