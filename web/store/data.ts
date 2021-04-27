export type TPeople = {
  slug: string;
  name: string;
};

export type TOrg = {
  slug: string;
  name: string;
  about: string;
  team: string[];
};

export function getPopularOrgs(): Array<TOrg> {
  return [ORGS["facebook"], ORGS["us-federal-gov"]];
}

export function getOrg(slug: string): TOrg {
  return ORGS[slug];
}

export function getOrgTeam(slug: string): Array<TPeople> {
  return ORGS[slug]["team"].map((ps: string) => PEOPLE[ps]);
}

const ORGS: { [key: string]: TOrg } = {
  facebook: {
    slug: "facebook",
    name: "Facebook, Inc.",
    about:
      "Founded in 2004, Facebook’s mission is to give people the power to build community and bring the world closer together. Over 2 billion people use Facebook, Instagram, WhatsApp, or Messenger every month to stay connected with friends and family, to discover what’s going on in the world, and to share and express what matters to them.",
    team: ["mark-zuckerberg-S8r3", "chris-cox-89as"],
  },
  "us-federal-gov": {
    slug: "us-federal-gov",
    name: "US Federal Government",
    about: "...",
    team: ["joe-biden-9123"],
  },
};

const PEOPLE: { [key: string]: TPeople } = {
  "mark-zuckerberg-S8r3": {
    slug: "mark-zuckerberg-S8r3",
    name: "Mark Zuckerberg",
  },
  "chris-cox-89as": {
    slug: "chris-cox-89as",
    name: "Chris Cox",
  },
  "joe-biden-9123": {
    slug: "joe-biden-9123",
    name: "Joe Biden",
  },
};

export default ORGS;
