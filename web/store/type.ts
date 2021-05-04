export type TOrg = {
  slug: string;
  name: string;
  about: string;
  team: string[]; // sub collection
  image: string;
  ocroots: string[];
};

export type TPerson = {
  slug: string;
  name: string;
  orgs: string[]; // sub collection
  image: string;
};

export type TRole = {
  slug: string;
  orgSlug: string;
  personSlug: string;
  name: string;
  reports: string[];
  reportsTo: string[];
};
