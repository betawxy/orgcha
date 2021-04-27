import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";

export default function PeoplePage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <PageWrapper>
      <div className="">people page - {slug}</div>
      <div>Reports</div>
      <span className="beta-link">
        <Link href="/people/chris-cox-89as">Chris Cox</Link>
      </span>
      <div>Orgs</div>
      <span className="beta-link">
        <Link href="/org/facebook">Facebook</Link>
      </span>
    </PageWrapper>
  );
}
