import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const GET = async (req: NextRequest) => {
  try {
    const { data, error } = await supabase.from("akademik").select("*");
    if (error) {
      throw error;
    }
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "err" }, { status: 200 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const struct = {
      key1: body.key1,
      key2: body.key2,
    };

    return NextResponse.json({ message: "post", struct }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
