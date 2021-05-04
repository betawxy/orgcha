import { ROLES, ORGS, PERSONS } from "./data";
import { TRole, TOrg, TPerson } from "./type";

export function getPopularOrgs(): Array<TOrg> {
  return [ORGS["google"], ORGS["facebook"], ORGS["us-federal-gov"]];
}

export function getOrg(slug: string): TOrg {
  return ORGS[slug];
}

export function getPerson(slug: string): TPerson {
  return PERSONS[slug];
}

export function getOrgTeam(slug: string): Array<[TRole, TPerson]> {
  if (!ORGS[slug]) {
    return [];
  }
  return ORGS[slug]["team"].map((slug: string) => {
    const role = ROLES[slug];
    const person = PERSONS[role.personSlug];
    return [role, person];
  });
}

export function getOrgRoots(
  slug: string
): Array<[TRole, TPerson, Array<[TRole, TPerson]>]> {
  if (!ORGS[slug]) {
    return [];
  }

  const helper = (roles: string[]): Array<[TRole, TPerson]> => {
    return roles.map((slug: string) => {
      const role = ROLES[slug];
      const person = PERSONS[role.personSlug];
      return [role, person];
    });
  };
  let res = helper(ORGS[slug]["ocroots"]);

  return res.map((p) => [p[0], p[1], helper(p[0].reports)]);
}

export function getPersonOrgs(person: TPerson): Array<[TRole, TOrg]> {
  return person.orgs.map((s) => {
    const role = ROLES[s];
    const org = ORGS[role.orgSlug];
    return [role, org];
  });
}

export function getReports(orgPerson: TRole): Array<[TRole, TPerson]> {
  return orgPerson.reports.map((s) => [ROLES[s], PERSONS[ROLES[s].personSlug]]);
}

export function getManagers(orgPerson: TRole): Array<[TRole, TPerson]> {
  return orgPerson.reportsTo.map((s) => [
    ROLES[s],
    PERSONS[ROLES[s].personSlug],
  ]);
}
