export default function Page() {
  return (
    <div className="flex flex-col px-8 py-8">
      <header className="flex w-full flex-col items-center gap-6 py-4">
        <h1 className="font-bold">Configure Encryption Key</h1>
        <nav className="flex w-full justify-between gap-4 font-semibold">
          <a
            href="./download"
            className="w-full rounded-md border border-black p-1 text-center hover:bg-black hover:text-white"
          >
            Download Transcript
          </a>
          <a
            href="./"
            className="w-full rounded-md border border-black p-1 text-center hover:bg-black hover:text-white"
          >
            Academic Database
          </a>
        </nav>
      </header>
      <section></section>
    </div>
  );
}
