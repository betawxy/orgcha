import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import {
  getPerson,
  getPersonOrgs,
  TOPRel,
  getReports,
  TPerson,
} from "store/data";

export default function PeoplePage() {
  const router = useRouter();
  const { slug } = router.query;

  const person = getPerson(slug as string);
  if (!person) {
    return null;
  }
  const personOrgs = getPersonOrgs(person);

  return (
    <PageWrapper>
      <div className="text-xl my-6">{person.name}</div>

      <div className="mt-6 border-b border-gray-400">Orgs</div>
      {personOrgs.map((pair, k) => (
        <div className="mb-3" key={k}>
          <div>
            <span>{pair[0].role} of </span>
            <span className="beta-link">
              <Link href={`/org/${pair[1].slug}`}>{pair[1].name}</Link>
            </span>
          </div>
          <div className="">
            <div className="">Reports</div>
            <ReportsList orgPerson={pair[0]} />
          </div>
        </div>
      ))}
    </PageWrapper>
  );
}

const ReportsList = ({ orgPerson }: { orgPerson: TOPRel }) => {
  const reports: Array<[TOPRel, TPerson]> = getReports(orgPerson);
  orgPerson.reports;
  return (
    <div>
      {reports.map((pair, key) => (
        <div key={key}>
          {pair[0].role} - {pair[1].name}
        </div>
      ))}
    </div>
  );
};
