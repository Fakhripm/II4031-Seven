"use client";
import { useState, ChangeEvent, MouseEvent } from "react";
import { Akademik } from "../api/data/mahasiswa/[nim]/route";

export default function Page() {
  const [data, setData] = useState<Akademik>();
  const [nim, setNim] = useState<string>();

  const fetchData = async (nim: string) => {
    try {
      const response = await fetch(`/api/data/mahasiswa/${nim}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result.data[0]);
      console.log("Data...");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNim(e.target.value);
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (nim) {
      await fetchData(nim);
    } else {
      alert("Please enter a NIM");
    }
  };

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
      <section>
        <form className="flex flex-col items-center gap-2 rounded-md border border-black p-4">
          <label htmlFor="nim" className="font-medium">
            Masukkan NIM
          </label>
          <input
            id="nim"
            name="nim"
            maxLength={8}
            className="w-3/5 text-center"
            onChange={handleInputChange}
          ></input>
          <button
            className="w-2/5 rounded-md border bg-gray-800 p-1 font-medium text-white hover:bg-black"
            onClick={handleClick}
          >
            Check
          </button>
        </form>
      </section>
    </div>
  );
}
