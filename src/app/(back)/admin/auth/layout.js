import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthLayout({ children }) {
    const route = children.props.childProp.segment
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        redirect('/admin')
    }

    return (
        <>
            <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100">
                <main id="page-content" className="flex flex-auto flex-col max-w-full">
                    <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
                        <section className="py-6 w-full max-w-xl">
                            {children}
                            <div className="text-sm text-gray-500 text-center mt-6">
                                Built by <a href="#" target="_blank" className="font-medium text-blue-600 hover:text-blue-400">emrecoban</a>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}