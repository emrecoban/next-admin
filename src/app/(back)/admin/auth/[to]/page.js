import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import LoginPage from "./LoginPage"
import PasswordPage from "./PasswordPage"
import RegisterPage from "./RegisterPage"

export default async function Auth({ params }) {
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const { data: userData } = await supabase.auth.getSession();
    if (!userData.session) {
        if (params.to === "register") return (<RegisterPage />)
        if (params.to === "password") return (<PasswordPage />)
        return (<LoginPage />)
    } else {
        return redirect('/admin')
    }

}