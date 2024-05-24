import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../../utils/supabase/client";

export interface Akademik {
  id: number;
  created_at: string; 
  nim: string;
  nama: string;
  kode_mk1: string;
  kode_mk2: string;
  kode_mk3: string;
  kode_mk4: string;
  kode_mk5: string;
  kode_mk6: string;
  kode_mk7: string;
  kode_mk8: string;
  kode_mk9: string;
  kode_mk10: string;
  nama_matkul1: string;
  nama_matkul2: string;
  nama_matkul3: string;
  nama_matkul4: string;
  nama_matkul5: string;
  nama_matkul6: string;
  nama_matkul7: string;
  nama_matkul8: string;
  nama_matkul9: string;
  nama_matkul10: string;
  nilai1: string;
  nilai2: string;
  nilai3: string;
  nilai4: string;
  nilai5: string;
  nilai6: string;
  nilai7: string;
  nilai8: string;
  nilai9: string;
  nilai10: string;
  sks1: string;
  sks2: string;
  sks3: string;
  sks4: string;
  sks5: string;
  sks6: string;
  sks7: string;
  sks8: string;
  sks9: string;
  sks10: string;
  ipk: string;
  ttd: string;
  public_key: string;
}
export const GET = async (
  req: NextRequest,
  { params }: { params: { nim: string } },
) => {
  const nim = params.nim;

  if (!nim) {
    return NextResponse.json(
      { message: "Missing nim parameter" },
      { status: 400 },
    );
  }
  try {
    const { data, error } = await supabase
      .from("akademik")
      .select()
      .eq("nim", nim);
    if (error) {
      throw error;
    }
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.error();
    return NextResponse.json({ message: "err", err }, { status: 500 });
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { nim: string } },
) => {
  const nim = params.nim;

  if (!nim) {
    return NextResponse.json(
      { message: "Missing nim parameter" },
      { status: 400 },
    );
  }
  const Mahasiswa = await req.json();
  try {
    const { data, error } = await supabase
      .from("akademik")
      .upsert(Mahasiswa)
      .select();
    if (error) {
      throw error;
    }
    return NextResponse.json({ data }, { status: 201 });
  } catch (err) {
    console.log("Error...")
    console.error(err)
    return NextResponse.json({ message: "err", err }, { status: 500 });
  }
};
