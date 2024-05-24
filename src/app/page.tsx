"use client";
import React, { useEffect, useState } from "react";
import { GET } from "./api/data/route";
import { NextRequest } from "next/server";
import InputData from "../components/InputData";
import { Akademik } from "./api/data/mahasiswa/[nim]/route";
import { Record } from "../components/Record";

async function getAcademicData() {
  const req = new NextRequest(new URL("/api/data", "http://localhost:3000"));
  const res = await GET(req);

  if (!res.ok) {
    throw new Error("getAcademicData: Failed to Fetch Data");
  }

  const data = await res.json();
  return data.data;
}

export default function Page() {
  const [data, setData] = useState(Array<Akademik>());
  const [state, setState] = useState<boolean>(true);

  const fetchData = async () => {
    const result = await getAcademicData();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col px-8 py-8">
      <header className="flex w-full flex-col items-center gap-6 py-4">
        <h1 className="font-bold">Academic Database II4031</h1>
      </header>
      <section className="flex flex-col gap-4 py-4">
        <div className="flex gap-4">
          <h2 className="font-semibold">Academic Database</h2>
          <select
            name="encryption-state"
            id="encryption-state"
            className="rounded-md border border-black hover:cursor-pointer"
            onChange={(e) => setState(e.target.value === "plaintext")}
          >
            <option value="plaintext">Plaintext</option>
            <option value="ciphertext">Ciphertext</option>
          </select>
        </div>
        <article className="flex overflow-x-auto">
          <table className="min-w-[6000px] table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th>Transcript</th>
                <th>NIM</th>
                <th>Nama Mahasiswa</th>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                  <React.Fragment key={index}>
                    <th>Kode MK {index}</th>
                    <th>Nama MK {index}</th>
                    <th>Nilai MK {index}</th>
                    <th>SKS MK {index}</th>
                  </React.Fragment>
                ))}
                <th>IPK</th>
                <th>Digital Signature</th>
                <th>Public Key</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data ? (
                data.map((record) => (
                  <Record decode={state} key={record.id} cipherdata={record} />
                ))
              ) : (
                <tr>
                  <td colSpan={46}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </article>
      </section>
      <InputData onFormSubmit={fetchData} />
    </div>
  );
}
