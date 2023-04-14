import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojhphgdumdppwgxhnljr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaHBoZ2R1bWRwcHdneGhubGpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0ODYzMzcsImV4cCI6MTk5NzA2MjMzN30.RGQiF-EKZRxLPf829YwwZG0Kis9QAnzCtkVKp9rVhLE'

export const supabase = createClient(supabaseUrl, supabaseKey)