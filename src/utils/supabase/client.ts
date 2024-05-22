import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nxsrkylwzeuxotbzbure.supabase.co'
const supabaseKey =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54c3JreWx3emV1eG90YnpidXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMjA3NTYsImV4cCI6MjAzMTc5Njc1Nn0.5c4GtZj8L99Ki6K1CuLd64Q_1vfQ49X4nJRzegCVKSU"
export const supabase = createClient(supabaseUrl, supabaseKey)