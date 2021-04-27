import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";

export default function OrgJobsPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <PageWrapper>
      <div className="text-xl">org jobs page - {slug}</div>
      Jobs
    </PageWrapper>
  );
}
