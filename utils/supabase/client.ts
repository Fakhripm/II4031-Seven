import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nxsrkylwzeuxotbzbure.supabase.co'
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey)