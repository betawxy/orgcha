import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";

import { TOPRel, TPerson } from "store/type";
import { getManagers, getPerson, getPersonOrgs, getReports } from "store/utils";
import { TeamMemberCard } from "pages/org/[slug]";

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
      <section className="flex my-12">
        <img
          className="flex flex-none w-24 h-24 rounded-full"
          src={person.image}
        />
        <div className="flex flex-grow items-center">
          <div className="ml-6 text-3xl ml-10 text-gray-800">{person.name}</div>
        </div>
      </section>
      {personOrgs.map((pair, k) => (
        <div className="my-6 border-t border-blue-300" key={k}>
          <div className="text-2xl mt-6 mb-3">
            <span>{pair[0].role} - </span>
            <span className="beta-link">
              <Link href={`/org/${pair[1].slug}`}>{pair[1].name}</Link>
            </span>
          </div>
          {pair[0].reportsTo.length > 0 && (
            <div className="bg-blue-100 rounded p-6 pt-1">
              <div className="my-6 text-lg">Reports To</div>
              <ReportsToList orgPerson={pair[0]} />
            </div>
          )}
          {pair[0].reports.length > 0 && (
            <div className="bg-blue-100 rounded p-6 pt-1">
              <div className="my-6 text-lg">Direct Reports</div>
              <ReportsList orgPerson={pair[0]} />
            </div>
          )}
        </div>
      ))}
    </PageWrapper>
  );
}

const ReportsList = ({ orgPerson }: { orgPerson: TOPRel }) => {
  const reports: Array<[TOPRel, TPerson]> = getReports(orgPerson);
  return (
    <div className="flex">
      {reports.map((pair, key) => (
        <TeamMemberCard key={key} oprel={pair[0]} person={pair[1]} />
      ))}
    </div>
  );
};

const ReportsToList = ({ orgPerson }: { orgPerson: TOPRel }) => {
  const reports: Array<[TOPRel, TPerson]> = getManagers(orgPerson);
  return (
    <div className="flex">
      {reports.map((pair, key) => (
        <TeamMemberCard key={key} oprel={pair[0]} person={pair[1]} />
      ))}
    </div>
  );
};
