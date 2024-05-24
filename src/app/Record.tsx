import React from "react";
import { rc4EncryptModified } from "@/utils/crypto/rc4";
import { Akademik } from "./api/data/mahasiswa/[nim]/route";
import KeyConfig from "./app.config.js";

function convert(c: string | null, state: boolean) {
  if (state && c !== null) {
    const p = rc4EncryptModified(c, KeyConfig.rc4_key);
    /////////////Jgn lupa atob(c)
    return p;
  }
  return c;
}

async function downloadTranscript(nim: string) {
  try {
    const response = await fetch(`/api/data/mahasiswa/${nim}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await response.json();
    // setData(result.data[0]);
    console.log("Data...");
    // console.log(data);
  } catch (error) {
    console.error(error);
  }

  return <button type="button"></button>;
}

const Record = ({ data, decode }: { data: Akademik; decode: boolean }) => {
  return (
    <tr>
      <td></td>
      <td>{convert(data.nim, decode)}</td>
      <td>{convert(data.nama, decode)}</td>
      <td>{convert(data.kode_mk1, decode)}</td>
      <td>{convert(data.nama_matkul1, decode)}</td>
      <td>{convert(String(data.nilai1), decode)}</td>
      <td>{convert(String(data.sks1), decode)}</td>
      <td>{convert(data.kode_mk2, decode)}</td>
      <td>{convert(data.nama_matkul2, decode)}</td>
      <td>{convert(String(data.nilai2), decode)}</td>
      <td>{convert(String(data.sks2), decode)}</td>
      <td>{convert(data.kode_mk3, decode)}</td>
      <td>{convert(data.nama_matkul3, decode)}</td>
      <td>{convert(String(data.nilai3), decode)}</td>
      <td>{convert(String(data.sks3), decode)}</td>
      <td>{convert(data.kode_mk4, decode)}</td>
      <td>{convert(data.nama_matkul4, decode)}</td>
      <td>{convert(String(data.nilai4), decode)}</td>
      <td>{convert(String(data.sks4), decode)}</td>
      <td>{convert(data.kode_mk5, decode)}</td>
      <td>{convert(data.nama_matkul5, decode)}</td>
      <td>{convert(String(data.nilai5), decode)}</td>
      <td>{convert(String(data.sks5), decode)}</td>
      <td>{convert(data.kode_mk6, decode)}</td>
      <td>{convert(data.nama_matkul6, decode)}</td>
      <td>{convert(String(data.nilai6), decode)}</td>
      <td>{convert(String(data.sks6), decode)}</td>
      <td>{convert(data.kode_mk7, decode)}</td>
      <td>{convert(data.nama_matkul7, decode)}</td>
      <td>{convert(String(data.nilai7), decode)}</td>
      <td>{convert(String(data.sks7), decode)}</td>
      <td>{convert(data.kode_mk8, decode)}</td>
      <td>{convert(data.nama_matkul8, decode)}</td>
      <td>{convert(String(data.nilai8), decode)}</td>
      <td>{convert(String(data.sks8), decode)}</td>
      <td>{convert(data.kode_mk9, decode)}</td>
      <td>{convert(data.nama_matkul9, decode)}</td>
      <td>{convert(String(data.nilai9), decode)}</td>
      <td>{convert(String(data.sks9), decode)}</td>
      <td>{convert(data.kode_mk10, decode)}</td>
      <td>{convert(data.nama_matkul10, decode)}</td>
      <td>{convert(String(data.nilai10), decode)}</td>
      <td>{convert(String(data.sks10), decode)}</td>
      <td>{convert(String(data.ipk), decode)}</td>
      <td>{convert(data.ttd, decode)}</td>
    </tr>
  );
};

export { Record, convert };
