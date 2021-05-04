export type TOrg = {
  slug: string; // kebab-case
  name: string;
  about: string;
  image: string;
  ocroots: string[];
  roleSlugs: string[]; // sub collection
};

export type TPerson = {
  slug: string; // kebab-case-4*base62
  name: string;
  image: string;
  roleSlugs: string[]; // sub collection
};

export type TRole = {
  slug: string; // 8*base62
  orgSlug: string;
  personSlug: string;
  name: string;
  directReportsRoleSlugs: string[];
  reportsToRoleSlugs: string[];
};
