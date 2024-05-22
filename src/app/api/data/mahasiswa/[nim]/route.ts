import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../../utils/supabase/client";

export interface Akademik {
  id: number;
  created_at: string; // ISO date string
  NIM: string;
  nama: string;
  kode_mk1: string | null;
  kode_mk2: string | null;
  kode_mk3: string | null;
  kode_mk4: string | null;
  kode_mk5: string | null;
  kode_mk6: string | null;
  kode_mk7: string | null;
  kode_mk8: string | null;
  kode_mk9: string | null;
  kode_mk10: string | null;
  nama_matkul1: string | null;
  nama_matkul2: string | null;
  nama_matkul3: string | null;
  nama_matkul4: string | null;
  nama_matkul5: string | null;
  nama_matkul6: string | null;
  nama_matkul7: string | null;
  nama_matkul8: string | null;
  nama_matkul9: string | null;
  nama_matkul10: string | null;
  nilai1: number | null;
  nilai2: number | null;
  nilai3: number | null;
  nilai4: number | null;
  nilai5: number | null;
  nilai6: number | null;
  nilai7: number | null;
  nilai8: number | null;
  nilai9: number | null;
  nilai10: number | null;
  sks1: number | null;
  sks2: number | null;
  sks3: number | null;
  sks4: number | null;
  sks5: number | null;
  sks6: number | null;
  sks7: number | null;
  sks8: number | null;
  sks9: number | null;
  sks10: number | null;
  ipk: number;
  ttd: string | null;
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
      .eq("NIM", nim);
    if (error) {
      throw error;
    }
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
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
    return NextResponse.json({ message: "err", err }, { status: 500 });
  }
};
