import Auth from "../Auth"
import Logout from "../Logout"
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
        return (<Logout session={userData.session} />)
    }
    return (<Auth />)
}