import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import LoginPage from "./login/page"
import PasswordPage from "./password/page"
import RegisterPage from "./register/page"

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