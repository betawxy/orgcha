import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import { getPerson, getOrgPersons } from "store/data";

export default function PeoplePage() {
  const router = useRouter();
  const { slug } = router.query;

  const person = getPerson(slug as string);
  const orgPersons = getOrgPersons(person);

  return (
    <PageWrapper>
      <div className="text-xl my-6">{person.name}</div>

      <div className="mt-6 border-b border-gray-400">Orgs</div>
      {orgPersons.map((pair, k) => (
        <div className="" key={k}>
          <span className="beta-link">
            <Link href={`/org/${pair[1].slug}`}>{pair[1].name}</Link>
          </span>
        </div>
      ))}
      {/* <div className="mt-6 border-b border-gray-400">Reports</div>

      {orgPersons.map((p, k) => (
        <div className="" key={k}>
          <span className="beta-link">
            <Link href={`/people/${p.slug}`}>{p.name}</Link>
          </span>
        </div>
      ))} */}
    </PageWrapper>
  );
}
