import { H1, Paragraph } from "@/components/ui/typography";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="space-y-6">
      <H1>{SITE_CONFIG.name}</H1>
      <Paragraph>
      Trying to change the world. 
      </Paragraph>
      <Paragraph>
        Currently building viral mobile apps at{" "}
        <Link
          target="_blank"
          href={SITE_CONFIG.links.magicapps}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          MagicApps
        </Link>
      </Paragraph>
    </section>
  );
}
