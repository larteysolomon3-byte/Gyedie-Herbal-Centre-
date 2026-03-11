import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/database';

const supabaseUrl = "https://ubcllgnflnwizpiyogdj.supabase.co";
const supabaseAnonKey = "sb_publishable_asB5hXHsdEjXVizvRk5T2g_Rt6OWXnu";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
