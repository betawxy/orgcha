import Link from "next/link";
import { GiOrganigram } from "react-icons/gi";

export default function PageWrapper({ children }) {
  return (
    <div className="beta-page-wrapper text-gray-800">
      <header className="beta-hf-wrapper h-16 bg-blue-800">
        <nav className="beta-container">
          <div className="text-3xl text-white">
            <Link href="/">
              <div className="flex flex-none items-center">
                <GiOrganigram />
                <div className="ml-3">orgcha</div>
              </div>
            </Link>
          </div>
        </nav>
      </header>
      <main className="w-full mb-auto">
        <div className="beta-container">{children}</div>
      </main>
      <footer className="beta-hf-wrapper h-24 bg-blue-100">
        <div className="beta-container text-sm text-gray-500">
          &copy; {new Date().getFullYear()} orgcha.com - crowd sourced
          org-charts for all
        </div>
      </footer>
    </div>
  );
}
