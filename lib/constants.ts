// constants.ts
interface SiteConfig {
  name: string;
  description: string;
  links: {
    crackeddevs: string;
    cryptogym: string;
    helio: string;
    helioAquired: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Michael Beer",
  description: "Building viral mobile apps",
  links: {
    crackeddevs: "https://crackeddevs.com",
    cryptogym: "https://try.cryptogym.lol",
    helio: "https://hel.io",
    helioAquired: "https://www.foxbusiness.com/markets/moonpay-acquires-helio-175m-expand-crypto-payments-infrastructure",
  },
};

export const TIMELINE = [
  {
    age: "Now",
    events: [
      `Building [CryptoGym](${SITE_CONFIG.links.cryptogym}), a crypto trading simulator`,
      `Operating [CrackedDevs](${SITE_CONFIG.links.crackeddevs}), a leading crypto product studio (for hire)`,
    ],
  },
  {
    age: "22",
    events: [
      `[Helio acquired for $175m](${SITE_CONFIG.links.helioAquired})`,
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

export const FUTURE_GOALS = [
  "Build robots to free us from boring work",
  "Increase human lifespan to 500",
  "Reverse climate change",
  "Solve world hunger",
];
