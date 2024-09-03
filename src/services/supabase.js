import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zdhcpbsmfgirsjhmcmxj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkaGNwYnNtZmdpcnNqaG1jbXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MDA3NTQsImV4cCI6MjAzODM3Njc1NH0.MswhTxQyiq57EgykR-z2q4Gvh0xLIz44yb1Wdbazj8g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
