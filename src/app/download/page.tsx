export default function Page() {
  return (
    <div className="flex flex-col px-8 py-8">
      <header className="flex w-full flex-col items-center gap-6 py-4">
        <h1 className="font-bold">Download Student Transcript</h1>
        <nav className="flex w-full justify-between gap-4 font-semibold">
          <a
            href="./"
            className="w-full rounded-md border border-black p-1 text-center hover:bg-black hover:text-white"
          >
            Academic Database
          </a>
          <a
            href="./config"
            className="w-full rounded-md border border-black p-1 text-center hover:bg-black hover:text-white"
          >
            Configure Encryption Key
          </a>
        </nav>
      </header>
      <section></section>
    </div>
  );
}
