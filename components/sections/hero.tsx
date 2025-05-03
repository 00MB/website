import { H1, Paragraph } from "@/components/ui/typography";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="space-y-6">
      <H1>{SITE_CONFIG.name}</H1>
      <Paragraph>
      Changing the world 
      </Paragraph>
    </section>
  );
}
