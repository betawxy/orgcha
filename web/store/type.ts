export type TOrg = {
  slug: string;
  name: string;
  about: string;
  team: string[];
  image: string;
  ocroots: string[];
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
