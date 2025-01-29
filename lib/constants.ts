// constants.ts
interface SiteConfig {
  name: string;
  description: string;
  links: {
    crackeddevs: string;
    magicapps: string;
    helio: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Michael Beer",
  description: "Building viral mobile apps",
  links: {
    crackeddevs: "https://crackeddevs.com",
    magicapps: "https://trymagicapps.com",
    helio: "https://hel.io",
  },
};

export const TIMELINE = [
  {
    age: "Now",
    events: [
      `Building viral mobile apps at [CrackedDevs](${SITE_CONFIG.links.crackeddevs})`,
      `Building [MagicApps](${SITE_CONFIG.links.magicapps}), focusing on viral mobile apps`,
    ],
  },
  {
    age: "22",
    events: [
      "Helio acquired for $175mil",
      `Started [CrackedDevs](${SITE_CONFIG.links.crackeddevs}), building elite crypto dev team`,
    ],
  },
  {
    age: "19",
    events: [`Dropped out, joined [Helio](${SITE_CONFIG.links.helio})`],
  },
  {
    age: "17",
    events: ["Went to university, skipped class, won hackathons instead"],
  },
];

export const FUTURE_GOALS = [
  "Build rockets?",
  "Improve human lifespan to 500?",
  "Build awesome robots?",
  "Save the world",
];
