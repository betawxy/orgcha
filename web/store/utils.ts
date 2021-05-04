import { OPRELS, ORGS, PERSONS } from "./data";
import { TOPRel, TOrg, TPerson } from "./type";

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

export function getOrgRoots(
  slug: string
): Array<[TOPRel, TPerson, Array<[TOPRel, TPerson]>]> {
  if (!ORGS[slug]) {
    return [];
  }

  const helper = (rels: string[]): Array<[TOPRel, TPerson]> => {
    return rels.map((slug: string) => {
      const rel = OPRELS[slug];
      const person = PERSONS[rel.personSlug];
      return [rel, person];
    });
  };
  let res = helper(ORGS[slug]["ocroots"]);

  return res.map((p) => [p[0], p[1], helper(p[0].reports)]);
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
