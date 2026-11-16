import { PROJECTS } from "@/lib/constants";
import { H2, Paragraph } from "@/components/ui/typography";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-8">
      <H2 className="mb-2">Projects</H2>
      <Paragraph className="mb-6">Placeholder projects for now.</Paragraph>
      <ul className="divide-y divide-neutral-200">
        {PROJECTS.map((project) => (
          <li key={project.name} className="py-4 first:pt-0 last:pb-0">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-2 transition-all hover:underline-offset-4"
              >
                {project.name}
                <IconArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <h3 className="text-sm font-medium">{project.name}</h3>
            )}
            <Paragraph className="mt-2">{project.description}</Paragraph>
          </li>
        ))}
      </ul>
    </section>
  );
}
