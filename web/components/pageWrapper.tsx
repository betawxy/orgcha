import Head from "next/head";

export default function C({ children }) {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <nav className="w-full h-40 bg-blue-800">
        <div className="container mx-auto">
          <div className="">Public OrgChart</div>
        </div>
      </nav>
      <main className="w-full">
        <div className="container mx-auto">{children}</div>
      </main>
      <footer className="w-full h-60">
        <div className="container mx-auto ">footer</div>
      </footer>
    </div>
  );
}
