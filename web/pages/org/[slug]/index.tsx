import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";

export default function OrgPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <PageWrapper>
      <div className="text-xl">org page - {slug}</div>
      <div>Team</div>
      <span className="beta-link">
        <Link href="/people/mark-zuckerberg-S8r3">Mark Zuckerberg</Link>
      </span>
      <div>Jobs</div>

      <span className="beta-link">
        <Link href={`/org/${slug}/jobs`}>Jobs</Link>
      </span>
    </PageWrapper>
  );
}
