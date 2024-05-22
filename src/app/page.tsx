"use client";
import React, { useEffect, useState } from "react";
import { hitungIPK } from "@/utils/indeks";
import { GET, POST } from "./api/data/route";
import { NextRequest } from "next/server";
import InputData from "./Form";
import { Akademik } from "./api/data/mahasiswa/[nim]/route";

async function getAcademicData() {
  const req = new NextRequest(new URL("/api/data", "http://localhost:3000"));
  const res = await GET(req);

  if (!res.ok) {
    throw new Error("getAcademicData: Failed to Fetch Data");
  }

  const data = await res.json();
  return data.data;
}

const Record = (data: Akademik) => {
  return (
    <tr>
      <td>{data.nim}</td>
      <td>{data.nama}</td>
      <td>{data.kode_mk1}</td>
      <td>{data.nama_matkul1}</td>
      <td>{data.nilai1}</td>
      <td>{data.sks1}</td>
      <td>{data.kode_mk2}</td>
      <td>{data.nama_matkul2}</td>
      <td>{data.nilai2}</td>
      <td>{data.sks2}</td>
      <td>{data.kode_mk3}</td>
      <td>{data.nama_matkul3}</td>
      <td>{data.nilai3}</td>
      <td>{data.sks3}</td>
      <td>{data.kode_mk4}</td>
      <td>{data.nama_matkul4}</td>
      <td>{data.nilai4}</td>
      <td>{data.sks4}</td>
      <td>{data.kode_mk5}</td>
      <td>{data.nama_matkul5}</td>
      <td>{data.nilai5}</td>
      <td>{data.sks5}</td>
      <td>{data.kode_mk6}</td>
      <td>{data.nama_matkul6}</td>
      <td>{data.nilai6}</td>
      <td>{data.sks6}</td>
      <td>{data.kode_mk7}</td>
      <td>{data.nama_matkul7}</td>
      <td>{data.nilai7}</td>
      <td>{data.sks7}</td>
      <td>{data.kode_mk8}</td>
      <td>{data.nama_matkul8}</td>
      <td>{data.nilai8}</td>
      <td>{data.sks8}</td>
      <td>{data.kode_mk9}</td>
      <td>{data.nama_matkul9}</td>
      <td>{data.nilai9}</td>
      <td>{data.sks9}</td>
      <td>{data.kode_mk10}</td>
      <td>{data.nama_matkul10}</td>
      <td>{data.nilai10}</td>
      <td>{data.sks10}</td>
      <td>{data.ipk}</td>
      <td>{data.ttd}</td>
    </tr>
  );
};

export default function Page() {
  const [data, setData] = useState(Array<Akademik>());

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAcademicData();
      console.log(result);
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col px-8 py-8">
      <header className="flex w-full flex-col items-center gap-6 py-4">
        <h1 className="font-bold">Academic Database II4031</h1>
        <nav className="flex w-full justify-between gap-4 font-semibold">
          <a
            href="./download"
            className="w-full rounded-md border border-black p-1 text-center hover:bg-black hover:text-white"
          >
            Download Transcript
          </a>
          <a
            href="./config"
            className="w-full rounded-md border border-black p-1 text-center hover:bg-black hover:text-white"
          >
            Configure Encryption Key
          </a>
        </nav>
      </header>
      <section className="flex flex-col gap-4 py-4">
        <div className="flex gap-4">
          <h2 className="font-semibold">Academic Database</h2>
          <select
            name="encryption-state"
            id="encryption-state"
            className="rounded-md border border-black hover:cursor-pointer"
          >
            <option value="plaintext">Plaintext</option>
            <option value="ciphertext">Ciphertext</option>
          </select>
        </div>
        <article className="flex overflow-x-auto">
          <table className="min-w-[6000px] table-auto">
            <thead className="bg-gray-200">
              <tr>
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
              </tr>
            </thead>
            <tbody className="text-center">
              {data ? (
                data.map((record) => <Record key={record.id} {...record} />)
              ) : (
                <tr>
                  <td colSpan={46}>
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </article>
      </section>
      <InputData />
    </div>
  );
}
