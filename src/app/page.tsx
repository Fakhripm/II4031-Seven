"use client";
import React from "react";
import { hitungIPK } from "@/utils/indeks";

interface MataKuliah {
  kodeMK: string;
  namaMK: string;
  nilaiMK: string;
  sksMK: number;
}

interface RecordData {
  nim: string;
  nama: string;
  mk: MataKuliah[];
  ttd: string;
}

async function getAcademicData() {
  const res = await fetch("");
  if (!res.ok) {
    throw new Error("getAcademicData: Failed to Fetch Data");
  }
  return res.json;
}

const data1: RecordData = {
  nim: "19223345",
  nama: "John Doe",
  mk: [
    { kodeMK: "MK001", namaMK: "Fisika", nilaiMK: "B", sksMK: 3 },
    { kodeMK: "MK002", namaMK: "Kimia", nilaiMK: "A", sksMK: 2 },
    { kodeMK: "MK003", namaMK: "Biologi", nilaiMK: "B", sksMK: 3 },
    { kodeMK: "MK004", namaMK: "Matematika", nilaiMK: "C", sksMK: 2 },
    { kodeMK: "MK005", namaMK: "Bahasa Inggris", nilaiMK: "A", sksMK: 3 },
    { kodeMK: "MK006", namaMK: "Sejarah", nilaiMK: "B", sksMK: 2 },
    { kodeMK: "MK007", namaMK: "Ekonomi", nilaiMK: "A", sksMK: 3 },
    { kodeMK: "MK008", namaMK: "Sosiologi", nilaiMK: "C", sksMK: 2 },
    { kodeMK: "MK009", namaMK: "Seni Budaya", nilaiMK: "A", sksMK: 3 },
    { kodeMK: "MK010", namaMK: "Tata Boga", nilaiMK: "B", sksMK: 2 },
  ],
  ttd: "opqrstuvwxyz",
};

const data2: RecordData = {
  nim: "18221171",
  nama: "Hans Stephano Edbert N",
  mk: [
    { kodeMK: "MK001", namaMK: "Matematika", nilaiMK: "A", sksMK: 3 },
    { kodeMK: "MK002", namaMK: "Fisika", nilaiMK: "B", sksMK: 2 },
    { kodeMK: "MK003", namaMK: "Bahasa Indonesia", nilaiMK: "A", sksMK: 3 },
    { kodeMK: "MK004", namaMK: "Kimia", nilaiMK: "C", sksMK: 2 },
    { kodeMK: "MK005", namaMK: "Biologi", nilaiMK: "A", sksMK: 3 },
    { kodeMK: "MK006", namaMK: "Bahasa Inggris", nilaiMK: "B", sksMK: 2 },
    { kodeMK: "MK007", namaMK: "Sejarah", nilaiMK: "B", sksMK: 3 },
    { kodeMK: "MK008", namaMK: "Ekonomi", nilaiMK: "C", sksMK: 2 },
    { kodeMK: "MK009", namaMK: "Sosiologi", nilaiMK: "A", sksMK: 3 },
    { kodeMK: "MK010", namaMK: "Seni Budaya", nilaiMK: "A", sksMK: 2 },
  ],
  ttd: "abcdefghijklmn",
};

const Record = (record: RecordData) => {
  return (
    <tr>
      <td>{record.nim}</td>
      <td>{record.nama}</td>
      {record.mk.map((matkul, index) => (
        <React.Fragment key={index}>
          <td>{matkul.kodeMK}</td>
          <td>{matkul.namaMK}</td>
          <td>{matkul.nilaiMK}</td>
          <td>{matkul.sksMK}</td>
        </React.Fragment>
      ))}
      <td>{hitungIPK(record.mk)}</td>
      <td>{record.ttd}</td>
    </tr>
  );
};

const InputMataKuliah = ({ index }: { index: string }) => (
  <div className="flex w-full gap-4">
    <text className="min-w-28 font-semibold">Mata Kuliah {index}</text>
    <input
      name="kode"
      minLength={6}
      maxLength={6}
      placeholder="Kode Mata Kuliah"
      required
    />
    <input name="nama" placeholder="Nama Mata Kuliah" required />
    <input
      name="nilai"
      placeholder="Nilai Mata Kuliah"
      required
      pattern="[Aa][Bb]?|[Bb][Cc]?|[Cc]|[Dd]|[Ee]"
    />
    <input
      name="sks"
      type="number"
      max={9}
      placeholder="SKS Mata Kuliah"
      required
    />
  </div>
);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const recordData: RecordData[] = [];
  const formData = new FormData(e.currentTarget);

  const nim = formData.get("nim-input");
  const nama = formData.get("nama-input");
  const kodeMK = formData.getAll("kode");
  const namaMK = formData.getAll("nama");
  const nilaiMK = formData.getAll("nilai");
  const sksMK = formData.getAll("sks");

  console.log(nim);
  console.log(nama);
  console.log(kodeMK);
  console.log(namaMK);
  console.log(nilaiMK);
  console.log(sksMK);

  if (kodeMK.length !== 10) {
    alert("Please fill the empty fields for 'Kode Mata Kuliah'!");
  } else if (namaMK.length !== 10) {
    alert("Please fill the empty fields for 'Nama Mata Kuliah'!");
  } else if (nilaiMK.length !== 10) {
    alert("Please fill the empty fields for 'Nilai Mata Kuliah'!");
  } else if (sksMK.length !== 10) {
    alert("Please fill the empty fields for 'SKS Mata Kuliah'!");
  } else {
    // sendInputValueToApi(inputValue).then(() => /* Do something */)
  }
};

export default function Page() {
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
              <Record
                nama={data1.nama}
                nim={data1.nim}
                mk={data1.mk}
                ttd={data1.ttd}
              />
              <Record
                nama={data2.nama}
                nim={data2.nim}
                mk={data2.mk}
                ttd={data2.ttd}
              />
            </tbody>
          </table>
        </article>
      </section>
      <form onSubmit={handleSubmit}>
        <section className="flex w-full pb-2">
          <aside className="flex w-1/5 flex-col py-4 pr-4">
            <h2 className="font-semibold italic">Input Data Diri</h2>
            <label htmlFor="nim-input" className="block pb-1 pt-2 font-medium">
              NIM
            </label>
            <input id="nim-input" name="nim-input" placeholder="Masukkan NIM" />
            <label htmlFor="nama-input" className="block pb-1 pt-2 font-medium">
              Nama Mahasiswa
            </label>
            <input
              id="nama-input"
              name="nama-input"
              placeholder="Masukkan Nama Mahasiswa"
            />
          </aside>
          <section className="flex w-4/5 flex-col gap-2 overflow-x-auto py-4 pl-4">
            <h2 className="pb-1 font-semibold italic">Input Mata Kuliah</h2>
            <InputMataKuliah index="01" />
            <InputMataKuliah index="02" />
            <InputMataKuliah index="03" />
            <InputMataKuliah index="04" />
            <InputMataKuliah index="05" />
            <InputMataKuliah index="06" />
            <InputMataKuliah index="07" />
            <InputMataKuliah index="08" />
            <InputMataKuliah index="09" />
            <InputMataKuliah index="10" />
          </section>
        </section>

        <input
          type="submit"
          className="w-full rounded-md bg-gray-800 py-1 font-medium italic text-white hover:cursor-pointer hover:bg-black"
        />
      </form>
    </div>
  );
}
