import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import { getOrg, getOrgTeam, TOrg, TPerson } from "store/data";

export default function OrgPage() {
  const router = useRouter();
  const { slug } = router.query;

  const org: TOrg = getOrg(slug as string);
  const team: TPerson[] = getOrgTeam(slug as string);

  return (
    <PageWrapper>
      <div className="text-xl my-6">Org - {org.name}</div>
      <p>{org.about}</p>
      <div className="border-b border-gray-300 mt-3">Team</div>
      {team.map((people, key) => (
        <div key={key} className="">
          <span className="beta-link">
            <Link href={`/people/${people.slug}`}>{people.name}</Link>
          </span>
        </div>
      ))}

      <div className="border-b border-gray-300 mt-3">Jobs</div>
      <span className="beta-link">
        <Link href={`/org/${slug}/jobs`}>Jobs</Link>
      </span>
    </PageWrapper>
  );
}
