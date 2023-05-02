import Auth from "../Auth"
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from "next/navigation";
import { headers, cookies } from 'next/headers'

export default async function Admin() {
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const { data: userData } = await supabase.auth.getSession();
    console.log("veri =>", userData.session.user.user_metadata)
    if (userData.session) {
        return redirect("/")
    }
    return (<Auth />)
}