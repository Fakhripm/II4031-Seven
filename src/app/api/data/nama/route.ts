import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../../utils/supabase/client';

export const GET = async (req: NextRequest, res: Response) => {
    try {
        const { data, error } = await supabase.from("akademik").select("nama");
        if (error) {
            throw error;
        }
        return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
        return NextResponse.json({message : "err" ,err}, { status: 200 });
    }
};
