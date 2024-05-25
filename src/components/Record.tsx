"use client";
import React from "react";
import { rc4EncryptModified } from "@/utils/crypto/rc4";
import { Akademik } from "../app/api/data/mahasiswa/[nim]/route";
import { MouseEvent } from "react";
import { downloadPDF } from "@/utils/pdf";
import { useAppContext } from "@/context";

function convert(c: string, state: boolean) {
  const [rc4] = useAppContext();

  if (state && c !== null) {
    const p = rc4EncryptModified(atob(c), rc4);
    return p;
  }
  return c;
}

function convertAll(data: Akademik) {
  try {
    const convertedData: Akademik = {
      id: data.id,
      created_at: data.created_at,
      nim: convert(data.nim, true),
      nama: convert(data.nama, true),
      kode_mk1: convert(data.kode_mk1, true),
      nama_matkul1: convert(data.nama_matkul1, true),
      nilai1: convert(String(data.nilai1), true),
      sks1: convert(String(data.sks1), true),
      kode_mk2: convert(data.kode_mk2, true),
      nama_matkul2: convert(data.nama_matkul2, true),
      nilai2: convert(String(data.nilai2), true),
      sks2: convert(String(data.sks2), true),
      kode_mk3: convert(data.kode_mk3, true),
      nama_matkul3: convert(data.nama_matkul3, true),
      nilai3: convert(String(data.nilai3), true),
      sks3: convert(String(data.sks3), true),
      kode_mk4: convert(data.kode_mk4, true),
      nama_matkul4: convert(data.nama_matkul4, true),
      nilai4: convert(String(data.nilai4), true),
      sks4: convert(String(data.sks4), true),
      kode_mk5: convert(data.kode_mk5, true),
      nama_matkul5: convert(data.nama_matkul5, true),
      nilai5: convert(String(data.nilai5), true),
      sks5: convert(String(data.sks5), true),
      kode_mk6: convert(data.kode_mk6, true),
      nama_matkul6: convert(data.nama_matkul6, true),
      nilai6: convert(String(data.nilai6), true),
      sks6: convert(String(data.sks6), true),
      kode_mk7: convert(data.kode_mk7, true),
      nama_matkul7: convert(data.nama_matkul7, true),
      nilai7: convert(String(data.nilai7), true),
      sks7: convert(String(data.sks7), true),
      kode_mk8: convert(data.kode_mk8, true),
      nama_matkul8: convert(data.nama_matkul8, true),
      nilai8: convert(String(data.nilai8), true),
      sks8: convert(String(data.sks8), true),
      kode_mk9: convert(data.kode_mk9, true),
      nama_matkul9: convert(data.nama_matkul9, true),
      nilai9: convert(String(data.nilai9), true),
      sks9: convert(String(data.sks9), true),
      kode_mk10: convert(data.kode_mk10, true),
      nama_matkul10: convert(data.nama_matkul10, true),
      nilai10: convert(String(data.nilai10), true),
      sks10: convert(String(data.sks10), true),
      ipk: convert(String(data.ipk), true),
      ttd: convert(data.ttd, true),
      public_key: convert(data.public_key, true),
    };
    return convertedData;
  } catch (error) {
    console.error(error);
    return data;
  }
}

const Record = ({
  cipherdata,
  decode,
}: {
  cipherdata: Akademik;
  decode: boolean;
}) => {
  const plaindata = convertAll(cipherdata);

  let recData = cipherdata;
  if (decode) {
    recData = plaindata;
  }

  function handleDownload(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // console.log(plaindata);
    downloadPDF(plaindata);
  }

  function handleVerify(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

  }

  return (
    <tr>
      <td>
        <button
          className="rounded-md border border-blue-800 bg-blue-500 px-2 py-0.5 font-medium text-white hover:bg-blue-600"
          onClick={handleDownload}
        >
          Download
        </button>
      </td>
      <td>
        <button
          className="w-full rounded-md border border-red-600 px-2 py-0.5 font-medium text-red-700 hover:bg-red-100"
          onClick={handleVerify}
        >
          Verify
        </button>
      </td>
      <td>{recData.nim}</td>
      <td>{recData.nama}</td>
      <td>{recData.kode_mk1}</td>
      <td>{recData.nama_matkul1}</td>
      <td>{recData.nilai1}</td>
      <td>{recData.sks1}</td>
      <td>{recData.kode_mk2}</td>
      <td>{recData.nama_matkul2}</td>
      <td>{recData.nilai2}</td>
      <td>{recData.sks2}</td>
      <td>{recData.kode_mk3}</td>
      <td>{recData.nama_matkul3}</td>
      <td>{recData.nilai3}</td>
      <td>{recData.sks3}</td>
      <td>{recData.kode_mk4}</td>
      <td>{recData.nama_matkul4}</td>
      <td>{recData.nilai4}</td>
      <td>{recData.sks4}</td>
      <td>{recData.kode_mk5}</td>
      <td>{recData.nama_matkul5}</td>
      <td>{recData.nilai5}</td>
      <td>{recData.sks5}</td>
      <td>{recData.kode_mk6}</td>
      <td>{recData.nama_matkul6}</td>
      <td>{recData.nilai6}</td>
      <td>{recData.sks6}</td>
      <td>{recData.kode_mk7}</td>
      <td>{recData.nama_matkul7}</td>
      <td>{recData.nilai7}</td>
      <td>{recData.sks7}</td>
      <td>{recData.kode_mk8}</td>
      <td>{recData.nama_matkul8}</td>
      <td>{recData.nilai8}</td>
      <td>{recData.sks8}</td>
      <td>{recData.kode_mk9}</td>
      <td>{recData.nama_matkul9}</td>
      <td>{recData.nilai9}</td>
      <td>{recData.sks9}</td>
      <td>{recData.kode_mk10}</td>
      <td>{recData.nama_matkul10}</td>
      <td>{recData.nilai10}</td>
      <td>{recData.sks10}</td>
      <td>{recData.ipk}</td>
      <td>{recData.ttd}</td>
      <td>{recData.public_key}</td>
    </tr>
  );
};

export { Record, convert };
