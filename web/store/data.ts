export type TPeople = {
  slug: string;
  name: string;
  reports: string[];
  //fix me: reports should be in orgs
  orgs: string[];
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

export function getPerson(slug: string): TPeople {
  return PEOPLE[slug];
}

export function getPersonTeam(slug: string): Array<TPeople> {
  return PEOPLE[slug]["reports"].map((s: string) => PEOPLE[s]);
}

export function getPersonOrgs(slug: string): Array<TOrg> {
  return PEOPLE[slug]["orgs"].map((s: string) => ORGS[s]);
}

const ORGS: { [key: string]: TOrg } = {
  facebook: {
    slug: "facebook",
    name: "Facebook, Inc.",
    about:
      "Founded in 2004, Facebook’s mission is to give people the power to build community and bring the world closer together. Over 2 billion people use Facebook, Instagram, WhatsApp, or Messenger every month to stay connected with friends and family, to discover what’s going on in the world, and to share and express what matters to them.",
    team: ["mark-zuckerberg-S8r3", "chris-cox-89as", "sheryl-sandberg-da1f"],
  },
  czi: {
    slug: "czi",
    name: "Chan Zuckerberg Initiative",
    about:
      "The Chan Zuckerberg Initiative was founded in 2015 to leverage technology, community-driven solutions and collaboration to help solve some of society’s toughest challenges. Our mission is to build a more inclusive, just, and healthy future for everyone.",
    team: ["mark-zuckerberg-S8r3"],
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
    reports: ["sheryl-sandberg-da1f", "chris-cox-89as"],
    orgs: ["facebook", "czi"],
  },
  "sheryl-sandberg-da1f": {
    slug: "sheryl-sandberg-da1f",
    name: "Sheryl Sandberg",
    reports: [],
    orgs: ["facebook"],
  },
  "chris-cox-89as": {
    slug: "chris-cox-89as",
    name: "Chris Cox",
    reports: [],
    orgs: ["facebook"],
  },
  "joe-biden-9123": {
    slug: "joe-biden-9123",
    name: "Joe Biden",
    orgs: ["us-federal-gov"],
    reports: [],
  },
};

export default ORGS;
