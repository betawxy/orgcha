export type TPeople = {};

export type TOrg = {
  slug: string;
  name: string;
  about: string;
  team: TPeople[];
};

export function getPopularOrgs(): Array<TOrg> {
  return [ORGS["facebook"], ORGS["us-federal-gov"]];
}

const ORGS: { [key: string]: TOrg } = {
  facebook: {
    slug: "facebook",
    name: "Facebook, Inc.",
    about:
      "Founded in 2004, Facebook’s mission is to give people the power to build community and bring the world closer together. Over 2 billion people use Facebook, Instagram, WhatsApp, or Messenger every month to stay connected with friends and family, to discover what’s going on in the world, and to share and express what matters to them.",
    team: [],
  },
  "us-federal-gov": {
    slug: "us-federal-gov",
    name: "US Federal Government",
    about: "...",
    team: [],
  },
};

export default ORGS;
