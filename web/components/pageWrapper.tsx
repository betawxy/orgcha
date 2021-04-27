import Head from "next/head";

export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <nav className="flex flex-none w-full h-20 bg-blue-800">
        <div className="container mx-auto">
          <div className="text-2xl text-white">Public OrgChart</div>
        </div>
      </nav>
      <main className="w-full mb-auto">
        <div className="container mx-auto">{children}</div>
      </main>
      <footer className="flex flex-none w-full h-32 bg-blue-100">
        <div className="container mx-auto ">footer</div>
      </footer>
    </div>
  );
}
