"use client";
import { ViewContainer } from "@/components/layouts/view-containers";
import Hero from "@/components/sections/hero";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="home-page">
      <ViewContainer className="space-y-8 py-16">
        <Hero />
        <Contact />
        <Experience />
      </ViewContainer>
    </main>
  );
}
