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
    <div className="flex flex-col px-20 py-8">
      <button
        className="max-w-48 rounded-md border bg-white p-1 font-medium text-black hover:bg-gray-100"
      >
        <a href="/">Back</a>
      </button>
      <div className="flex flex-col py-10 items-center space-y-6">
        {/* Decrypt  */}
          <h1 className="font-bold">Decrypt Student Transcript</h1>
            <input type="file" className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"/>
            <button
            className="w-full rounded-md bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
            >
              Decrypt
            </button>
      </div>
    </div>
  );
}
