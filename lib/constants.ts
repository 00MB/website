// constants.ts
interface SiteConfig {
  name: string;
  description: string;
  links: {
    crackeddevs: string;
    helio: string;  
    helioAquired: string;
    zfellows: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Michael Beer",
  description: "Building viral mobile apps",
  links: {
    crackeddevs: "https://x.com/crackeddevs",
    helio: "https://hel.io",
    helioAquired:
      "https://www.foxbusiness.com/markets/moonpay-acquires-helio-175m-expand-crypto-payments-infrastructure",
    zfellows: "https://zfellows.com",
  },
};

export const TIMELINE = [
  {
    age: "Now",
    events: ["Head of money at Whop. [Building AI ran businesses](/businesses)"],
  },
  {
    age: "23",
    events: [
      `Founded [CrackedDevs](${SITE_CONFIG.links.crackeddevs}), the best crypto engineering agency. Acquired by [Whop](https://x.com/michaelbeer01/status/2056810568166838772)`,
    ],
  },
  {
    age: "22",
    events: [
      `[Helio acquired for $175m](${SITE_CONFIG.links.helioAquired})`,
      `[Also ZFellows](${SITE_CONFIG.links.zfellows})`,
    ],
  },
  {
    age: "19",
    events: [
      `Dropped out, joined [Helio](${SITE_CONFIG.links.helio}) as founding engineer`,
    ],
  },
  {
    age: "17",
    events: ["Went to university, skipped class, won hackathons to pay for it"],
  },
  {
    age: "15",
    events: ["Built meme pages, dropshipping, saas products"],
  },
];

export const PROJECTS: { name: string; href?: string; description?: string }[] = [
  {
    name: "House of Tea",
    href: "https://x.com/michaelbeer01/status/2122213465691767035",
    description: "An online shop curating distinctive teas from India’s villages and gardens.",
  },
];

export const FUTURE_GOALS = [
  "Build robots to free us from boring work",
  "Increase human lifespan to 500",
  "Reverse climate change",
  "Solve world hunger",
];
