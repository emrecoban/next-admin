import LoginPage from "./LoginPage"
import Dashboard from "./Dashboard"
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'

export default async function Admin() {
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const { data: userData } = await supabase.auth.getSession();
    //console.log("veri =>", userData.session.user.user_metadata)
    if (userData.session) {
        return (<Dashboard session={userData.session} />)
    }
    return (<LoginPage />)
}