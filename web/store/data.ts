export type TPerson = {
  slug: string;
  name: string;
  orgs: string[];
};

export type TOrgPerson = {
  slug: string;
  orgSlug: string;
  personSlug: string;
  role: string;
  reports: string[];
};

export type TOrg = {
  slug: string;
  name: string;
  about: string;
  team: string[];
};

export type TPosition = {};

export function getPopularOrgs(): Array<TOrg> {
  return [ORGS["facebook"], ORGS["us-federal-gov"]];
}

export function getOrg(slug: string): TOrg {
  return ORGS[slug];
}

export function getOrgTeam(slug: string): Array<[TOrgPerson, TPerson]> {
  return ORGS[slug]["team"].map((slug: string) => {
    const orgPerson = ORGPERSONS[slug];
    const person = PEOPLE[orgPerson.personSlug];
    return [orgPerson, person];
  });
}

export function getPerson(slug: string): TPerson {
  return PEOPLE[slug];
}

export function getOrgPersons(person: TPerson): Array<[TOrgPerson, TOrg]> {
  return person.orgs.map((s) => {
    const orgPerson = ORGPERSONS[s];
    const org = ORGS[orgPerson.orgSlug];
    return [orgPerson, org];
  });
}

const ORGPERSONS: { [key: string]: TOrgPerson } = {
  "facebook_mark-zuckerberg-S8r3": {
    slug: "facebook_mark-zuckerberg-S8r3",
    orgSlug: "facebook",
    personSlug: "mark-zuckerberg-S8r3",
    role: "Founder & CEO",
    reports: ["facebook_chris-cox-89as", "facebook_sheryl-sandberg-da1f"],
  },
  "facebook_chris-cox-89as": {
    slug: "facebook_chris-cox-89as",
    orgSlug: "facebook",
    personSlug: "chris-cox-89as",
    role: "CPO",
    reports: [],
  },
  "facebook_sheryl-sandberg-da1f": {
    slug: "facebook_sheryl-sandberg-da1f",
    orgSlug: "facebook",
    personSlug: "sheryl-sandberg-da1f",
    role: "COO",
    reports: [],
  },
  "czi_mark-zuckerberg-S8r3": {
    slug: "czi_mark-zuckerberg-S8r3-zuckerberg-S8r3",
    orgSlug: "czi",
    personSlug: "mark-zuckerberg-S8r3",
    role: "Founder",
    reports: [],
  },
  "us-federal-gov_joe-biden-9123": {
    slug: "us-federal-gov_joe-biden-9123",
    orgSlug: "us-federal-gov",
    personSlug: "joe-biden-9123",
    role: "POTOS",
    reports: [],
  },
};

const ORGS: { [key: string]: TOrg } = {
  facebook: {
    slug: "facebook",
    name: "Facebook, Inc.",
    about:
      "Founded in 2004, Facebook’s mission is to give people the power to build community and bring the world closer together. Over 2 billion people use Facebook, Instagram, WhatsApp, or Messenger every month to stay connected with friends and family, to discover what’s going on in the world, and to share and express what matters to them.",
    team: [
      "facebook_mark-zuckerberg-S8r3",
      "facebook_chris-cox-89as",
      "facebook_sheryl-sandberg-da1f",
    ],
  },
  czi: {
    slug: "czi",
    name: "Chan Zuckerberg Initiative",
    about:
      "The Chan Zuckerberg Initiative was founded in 2015 to leverage technology, community-driven solutions and collaboration to help solve some of society’s toughest challenges. Our mission is to build a more inclusive, just, and healthy future for everyone.",
    team: ["czi_mark-zuckerberg-S8r3"],
  },
  "us-federal-gov": {
    slug: "us-federal-gov",
    name: "US Federal Government",
    about: "...",
    team: ["us-federal-gov_joe-biden-9123"],
  },
};

const PEOPLE: { [key: string]: TPerson } = {
  "mark-zuckerberg-S8r3": {
    slug: "mark-zuckerberg-S8r3",
    name: "Mark Zuckerberg",
    orgs: ["facebook_mark-zuckerberg-S8r3", "czi_mark-zuckerberg-S8r3"],
  },
  "sheryl-sandberg-da1f": {
    slug: "sheryl-sandberg-da1f",
    name: "Sheryl Sandberg",
    orgs: ["facebook_sheryl-sandberg-da1f"],
  },
  "chris-cox-89as": {
    slug: "chris-cox-89as",
    name: "Chris Cox",
    orgs: ["facebook_chris-cox-89as"],
  },
  "joe-biden-9123": {
    slug: "joe-biden-9123",
    name: "Joe Biden",
    orgs: ["us-federal-gov_joe-biden-9123"],
  },
};

export default ORGS;
