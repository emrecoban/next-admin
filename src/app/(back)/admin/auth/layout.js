import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthLayout({ children }) {
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        redirect('/admin')
    }

    return children
}