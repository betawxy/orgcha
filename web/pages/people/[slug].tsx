import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import { getPerson, getPersonTeam } from "store/data";

export default function PeoplePage() {
  const router = useRouter();
  const { slug } = router.query;

  const person = getPerson(slug as string);
  const personTeam = getPersonTeam(slug as string);

  return (
    <PageWrapper>
      <div className="text-xl my-6">{person.name}</div>
      <div className="mt-3 border-b border-gray-400">Reports</div>

      {personTeam.map((p, k) => (
        <div className="" key={k}>
          <span className="beta-link">
            <Link href={`/people/${p.slug}`}>{p.name}</Link>
          </span>
        </div>
      ))}
      <div className="mt-3 border-b border-gray-400">Orgs</div>
      <span className="beta-link">
        <Link href="/org/facebook">Facebook</Link>
      </span>
    </PageWrapper>
  );
}
