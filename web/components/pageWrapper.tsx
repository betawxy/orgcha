import Head from "next/head";
import Link from "next/link";

export default function PageWrapper({ children }) {
  return (
    <div className="beta-page-wrapper">
      <header className="beta-hf-wrapper h-16 bg-blue-800">
        <nav className="beta-container">
          <div className="text-2xl text-white">
            <Link href="/">Public OrgChart</Link>
          </div>
        </nav>
      </header>
      <main className="w-full mb-auto">
        <div className="beta-container">{children}</div>
      </main>
      <footer className="beta-hf-wrapper h-24 bg-blue-100">
        <div className="beta-container">
          &copy; {new Date().getFullYear()} PublicOrgChart.com
        </div>
      </footer>
    </div>
  );
}
