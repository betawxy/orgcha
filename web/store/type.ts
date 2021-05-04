export type TOrg = {
  slug: string; // kebab-case
  name: string;
  about: string;
  image: string;
  ocRootsRoleSlugs: string[];
  roleSlugs: string[]; // sub collection
};

export type TPerson = {
  slug: string; // kebab-case-4*base62
  name: string;
  image: string;
  roleSlugs: string[];
};

export type TRole = {
  slug: string; // 8*base62
  orgSlug: string;
  personSlug: string;
  name: string;
  directReportsRoleSlugs: string[];
  reportsToRoleSlugs: string[]; // could be multiple but first is main manager
};

// derived, not for db
export type TRoleNode = {
  role: TRole;
  org: TOrg;
  person: TPerson;
};
