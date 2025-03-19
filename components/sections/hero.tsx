import { H1, Paragraph } from "@/components/ui/typography";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="space-y-6">
      <H1>{SITE_CONFIG.name}</H1>
      <Paragraph>
      Changing the world. 
      </Paragraph>
      <Paragraph>
        Currently building large scale consumer products with{" "}
        <Link
          target="_blank"
          href={SITE_CONFIG.links.crackeddevs}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          CrackedDevs
        </Link>
      </Paragraph>
    </section>
  );
}
