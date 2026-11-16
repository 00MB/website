import type { Metadata } from "next";
import Link from "next/link";
import { ViewContainer } from "@/components/layouts/view-containers";
import Projects from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Businesses | Michael Beer",
  description: "Building AI ran businesses.",
};

export default function BusinessesPage() {
  return (
    <main>
      <ViewContainer className="space-y-8 py-16">
        <Link
          href="/"
          className="inline-block text-sm text-neutral-500 underline underline-offset-2 transition-all hover:text-neutral-900 hover:underline-offset-4"
        >
          ← Michael Beer
        </Link>
        <Projects />
      </ViewContainer>
    </main>
  );
}
