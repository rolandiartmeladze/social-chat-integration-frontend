export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to the <span className="text-blue-500">Next.js</span>
          <span className="text-blue-500">Tailwind CSS</span> 
          <span className="text-blue-500">TypeScript</span> Starter Template
        </h1>
        <p className="text-lg text-center sm:text-left">
          This is the landing page for the Tsemi qualification assignment template.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
         <a href="./user/messages"> See the assignment here </a>
          </button>
      </main>
    </div>
  );
}
