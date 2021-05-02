import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import { getOrg, getOrgTeam, TOrg, TOrgPerson, TPerson } from "store/data";

export default function OrgPage() {
  const router = useRouter();
  const { slug } = router.query;

  const org: TOrg = getOrg(slug as string);
  if (!org) {
    return null;
  }
  const team: Array<[TOrgPerson, TPerson]> = getOrgTeam(slug as string);

  return (
    <PageWrapper>
      <div className="text-xl my-6">{org.name}</div>
      <p>{org.about}</p>
      <div className="border-b border-gray-300 mt-6">Team</div>
      {team.map((pair, key) => (
        <div key={key} className="">
          <span className="beta-link">
            <Link href={`/people/${pair[1].slug}`}>{pair[1].name}</Link>
          </span>
          <span>{` - ${pair[0].role}`}</span>
        </div>
      ))}
    </PageWrapper>
  );
}
