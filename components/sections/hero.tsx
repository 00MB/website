import { H1, Paragraph } from "@/components/ui/typography";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="space-y-6">
      <H1>{SITE_CONFIG.name}</H1>
      <Paragraph>
        Currently building viral mobile apps at{" "}
        <Link
          href={SITE_CONFIG.links.crackeddevs}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          crackeddevs.com
        </Link>
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
    </section>
  );
}
