"use client";

import { useAppContext } from "@/context";
import { MouseEvent } from "react";

export default function Page() {
  const [rc4, setRC4, aes, setAES] = useAppContext();

  function handleSave(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const inputRC4Key = document.getElementById("rc4-key") as HTMLInputElement;
    if (inputRC4Key && inputRC4Key.value) {
      setRC4(inputRC4Key.value);
    }

    const inputAESKey = document.getElementById("aes-key") as HTMLInputElement;
    if (inputAESKey && inputAESKey.value) {
      setAES(inputAESKey.value);
    }
  }

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
      <main>
        <form className="flex flex-col items-center gap-4 rounded-md border border-black p-4">
          <div className="flex w-full">
            <section className="flex w-full flex-col gap-6 p-4">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="rc4-key" className="font-semibold">
                  Current RC4 Key
                </label>
                <input
                  id="curr-rc4"
                  disabled
                  value={rc4}
                  className="italic text-gray-500"
                ></input>
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="rc4-key" className="font-semibold">
                  Current AES Key
                </label>
                <input
                  id="curr-aes"
                  disabled
                  value={aes}
                  className="italic text-gray-500"
                ></input>
              </div>
            </section>

            <section className="flex w-full flex-col gap-6 p-4">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="rc4-key" className="font-semibold">
                  New RC4 Key
                </label>
                <input id="rc4-key"></input>
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="aes-key" className="font-semibold">
                  New AES Key
                </label>
                <input id="aes-key"></input>
              </div>
            </section>
          </div>
          <button
            className="w-11/12 rounded-md border bg-gray-800 p-1 font-medium text-white hover:bg-black"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      </main>
    </div>
  );
}
