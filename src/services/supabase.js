import {createClient} from "@supabase/supabase-js";
export const supabaseUrl = "https://bkhobwrsvhfjguvtevcl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJraG9id3Jzdmhmamd1dnRldmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyODc3ODcsImV4cCI6MjAzNjg2Mzc4N30.zzdl-INtfIYWFVvKxkfWrocHAYk1IM2wdTuuLz6E7GI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
