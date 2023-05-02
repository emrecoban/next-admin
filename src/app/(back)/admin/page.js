import Auth from "../Auth"
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from "next/navigation";
import { headers, cookies } from 'next/headers'

export default async function Admin() {
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const { userData } = await supabase.auth.getSession();

    if (data.session) {
        return redirect("/")
    }
    return (<Auth />)
}