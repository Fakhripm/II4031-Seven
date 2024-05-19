import React from "react";

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

const fromIndeks = (indeks: string) => {
  switch (indeks) {
    case "A":
      return 4.0;
    case "AB":
      return 3.5;
    case "B":
      return 3.0;
    case "BC":
      return 2.5;
    case "C":
      return 2.0;
    case "D":
      return 1.0;
    case "E":
      return 0.0;
    default:
      throw new Error("fromIndeks: Indeks Tidak Ditemukan");
  }
};

const hitungIPK = (MK: MataKuliah[]) => {
  let nilaiKolektif = 0;
  let totalSKS = 0;
  MK.forEach((matkul) => {
    nilaiKolektif += fromIndeks(matkul.nilaiMK) * matkul.sksMK;
    totalSKS += matkul.sksMK;
  });

  return nilaiKolektif / totalSKS;
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
    <input placeholder="Kode Mata Kuliah" />
    <input placeholder="Nama Mata Kuliah" />
    <input placeholder="Nilai Mata Kuliah" />
    <input placeholder="SKS Mata Kuliah" />
  </div>
);

export default function Page() {
  return (
    <div className="flex flex-col px-8 py-8">
      <header className="flex w-full justify-center py-4">
        <h1 className="font-bold">Academic Database II4031</h1>
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
      <section className="flex w-full pb-2">
        <aside className="flex w-1/5 flex-col py-4 pr-4">
          <h2 className="font-semibold italic">Input Data Diri</h2>
          <label htmlFor="nim-input" className="block pb-1 pt-2 font-medium">
            NIM
          </label>
          <input id="nim-input" placeholder="Masukkan NIM" />
          <label htmlFor="nama-input" className="block pb-1 pt-2 font-medium">
            Nama Mahasiswa
          </label>
          <input id="nama-input" placeholder="Masukkan Nama Mahasiswa" />
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
      <form>
        <input
          type="submit"
          className="w-full rounded-md bg-gray-800 py-1 font-medium italic text-white hover:cursor-pointer"
        />
      </form>
    </div>
  );
}
