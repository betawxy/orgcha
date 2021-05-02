export type TOrg = {
  slug: string;
  name: string;
  about: string;
  team: string[];
  image: string;
};

export type TPerson = {
  slug: string;
  name: string;
  orgs: string[];
  image: string;
};

export type TOPRel = {
  slug: string;
  orgSlug: string;
  personSlug: string;
  role: string;
  reports: string[];
  reportsTo: string[];
};

export function getPopularOrgs(): Array<TOrg> {
  return [ORGS["google"], ORGS["facebook"], ORGS["us-federal-gov"]];
}

export function getOrg(slug: string): TOrg {
  return ORGS[slug];
}

export function getPerson(slug: string): TPerson {
  return PERSONS[slug];
}

export function getOrgTeam(slug: string): Array<[TOPRel, TPerson]> {
  if (!ORGS[slug]) {
    return [];
  }
  return ORGS[slug]["team"].map((slug: string) => {
    const rel = OPRELS[slug];
    const person = PERSONS[rel.personSlug];
    return [rel, person];
  });
}

export function getPersonOrgs(person: TPerson): Array<[TOPRel, TOrg]> {
  return person.orgs.map((s) => {
    const rel = OPRELS[s];
    const org = ORGS[rel.orgSlug];
    return [rel, org];
  });
}

export function getReports(orgPerson: TOPRel): Array<[TOPRel, TPerson]> {
  return orgPerson.reports.map((s) => [
    OPRELS[s],
    PERSONS[OPRELS[s].personSlug],
  ]);
}

export function getManagers(orgPerson: TOPRel): Array<[TOPRel, TPerson]> {
  return orgPerson.reportsTo.map((s) => [
    OPRELS[s],
    PERSONS[OPRELS[s].personSlug],
  ]);
}

const OPRELS: { [key: string]: TOPRel } = {
  "facebook_mark-zuckerberg-S8r3": {
    slug: "facebook_mark-zuckerberg-S8r3",
    orgSlug: "facebook",
    personSlug: "mark-zuckerberg-S8r3",
    role: "Founder & CEO",
    reports: [
      "facebook_sheryl-sandberg-da1f",
      "facebook_chris-cox-89as",
      "facebook_mike-schroepfer-1sa0",
    ],
    reportsTo: [],
  },
  "facebook_chris-cox-89as": {
    slug: "facebook_chris-cox-89as",
    orgSlug: "facebook",
    personSlug: "chris-cox-89as",
    role: "CPO",
    reports: [],
    reportsTo: ["facebook_mark-zuckerberg-S8r3"],
  },
  "facebook_sheryl-sandberg-da1f": {
    slug: "facebook_sheryl-sandberg-da1f",
    orgSlug: "facebook",
    personSlug: "sheryl-sandberg-da1f",
    role: "COO",
    reports: [],
    reportsTo: ["facebook_mark-zuckerberg-S8r3"],
  },
  "facebook_mike-schroepfer-1sa0": {
    slug: "facebook_mike-schroepfer-1sa0",
    orgSlug: "facebook",
    personSlug: "mike-schroepfer-1sa0",
    role: "CTO",
    reports: ["facebook_andrew-bosworth-8923"],
    reportsTo: ["facebook_mark-zuckerberg-S8r3"],
  },
  "facebook_andrew-bosworth-8923": {
    slug: "facebook_andrew-bosworth-8923",
    orgSlug: "facebook",
    personSlug: "andrew-bosworth-8923",
    role: "Head of Facebook Reality Labs",
    reports: [],
    reportsTo: ["facebook_mike-schroepfer-1sa0"],
  },
  "czi_mark-zuckerberg-S8r3": {
    slug: "czi_mark-zuckerberg-S8r3-zuckerberg-S8r3",
    orgSlug: "czi",
    personSlug: "mark-zuckerberg-S8r3",
    role: "Founder",
    reports: [],
    reportsTo: [],
  },
  "us-federal-gov_joe-biden-9123": {
    slug: "us-federal-gov_joe-biden-9123",
    orgSlug: "us-federal-gov",
    personSlug: "joe-biden-9123",
    role: "President",
    reports: [],
    reportsTo: [],
  },
  "google_sundar-pichai-124a": {
    slug: "google_sundar-pichai-124a",
    orgSlug: "google",
    personSlug: "sundar-pichai-124a",
    role: "CEO",
    reports: [],
    reportsTo: [],
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
      "facebook_sheryl-sandberg-da1f",
      "facebook_chris-cox-89as",
      "facebook_mike-schroepfer-1sa0",
      "facebook_andrew-bosworth-8923",
    ],
    image:
      "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
  },
  czi: {
    slug: "czi",
    name: "Chan Zuckerberg Initiative",
    about:
      "The Chan Zuckerberg Initiative was founded in 2015 to leverage technology, community-driven solutions and collaboration to help solve some of society’s toughest challenges. Our mission is to build a more inclusive, just, and healthy future for everyone.",
    team: ["czi_mark-zuckerberg-S8r3"],
    image:
      "https://chanzuckerberg.com/wp-content/themes/czi/img/logo-minified.svg",
  },
  "us-federal-gov": {
    slug: "us-federal-gov",
    name: "Federal government of the United States",
    about:
      "The federal government of the United States is the national government of the United States, a federal republic in North America, composed of 50 states, a federal district, five major self-governing territories and several island possessions.",
    team: ["us-federal-gov_joe-biden-9123"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Greater_coat_of_arms_of_the_United_States.svg",
  },
  google: {
    slug: "google",
    name: "Google LLC",
    about:
      "Our mission is to organize the world’s information and make it universally accessible and useful.",
    team: ["google_sundar-pichai-124a"],
    image:
      "https://www.gstatic.com/images/branding/googleg/2x/googleg_standard_color_120dp.png",
  },
};

const PERSONS: { [key: string]: TPerson } = {
  "mark-zuckerberg-S8r3": {
    slug: "mark-zuckerberg-S8r3",
    name: "Mark Zuckerberg",
    orgs: ["facebook_mark-zuckerberg-S8r3", "czi_mark-zuckerberg-S8r3"],
    image:
      "https://pbs.twimg.com/profile_images/378800000639973627/f5513282d87d24168fd8f83daf7ebca0.jpeg",
  },
  "sheryl-sandberg-da1f": {
    slug: "sheryl-sandberg-da1f",
    name: "Sheryl Sandberg",
    orgs: ["facebook_sheryl-sandberg-da1f"],
    image:
      "https://mk0globalleaderbprs8.kinstacdn.com/wp-content/uploads/2018/05/Sheryl_Sandberg-128x128.png",
  },
  "chris-cox-89as": {
    slug: "chris-cox-89as",
    name: "Chris Cox",
    orgs: ["facebook_chris-cox-89as"],
    image:
      "https://www.industryleadersmagazine.com/wp-content/uploads/2020/06/Chris-Cox.jpg",
  },
  "mike-schroepfer-1sa0": {
    slug: "mike-schroepfer-1sa0",
    name: "Mike Schroepfer",
    orgs: ["facebook_mike-schroepfer-1sa0"],
    image:
      "https://pbs.twimg.com/profile_images/1210715117005889542/qe4GSFW5.jpg",
  },
  "andrew-bosworth-8923": {
    slug: "andrew-bosworth-8923",
    name: "Andrew Bosworth",
    orgs: ["facebook_andrew-bosworth-8923"],
    image:
      "https://cdn.theorg.com/10682502-f5a6-487e-b33a-7a33560b9c52_large.jpg",
  },
  "joe-biden-9123": {
    slug: "joe-biden-9123",
    name: "Joe Biden",
    orgs: ["us-federal-gov_joe-biden-9123"],
    image:
      "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_3095,w_3095,x_332,y_-1/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1584982783/RTS35TX1_d9m7qp",
  },
  "sundar-pichai-124a": {
    slug: "sundar-pichai-124a",
    name: "Sundar Pichai",
    orgs: ["google_sundar-pichai-124a"],
    image:
      "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
  },
};

export default ORGS;
