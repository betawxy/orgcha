import Head from "next/head";

export default function PageWrapper({ children }) {
  return (
    <div className="beta-page-wrapper">
      <nav className="beta-hf-wrapper h-20 bg-blue-800">
        <div className="beta-container">
          <div className="text-2xl text-white">Public OrgChart</div>
        </div>
      </nav>
      <main className="w-full mb-auto">
        <div className="beta-container">{children}</div>
      </main>
      <footer className="beta-hf-wrapper h-32 bg-blue-100">
        <div className="beta-container">
          &copy; {new Date().getFullYear()} PublicOrgChart.com
        </div>
      </footer>
    </div>
  );
}
