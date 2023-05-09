'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const Context = createContext(undefined)

export default function SupabaseProvider({ children }) {
    const [supabase] = useState(() => createBrowserSupabaseClient())
    const router = useRouter()

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("EVENT (provider) => ", event)
            console.log("SESSION (provider) => ", session)

            if (event === 'PASSWORD_RECOVERY') {
                router.push('/admin/auth/reset')
            }

            if (session && (event === 'SIGNED_IN' || event == 'TOKEN_REFRESHED')) {
                router.refresh()
            }

            if (event === 'SIGNED_OUT') {
                router.refresh()
            }

        })

        return () => {
            subscription.unsubscribe()
        }
    }, [router, supabase])

    return (
        <Context.Provider value={{ supabase }}>
            <>{children}</>
        </Context.Provider>
    )
}

export const useSupabase = () => {
    const context = useContext(Context)

    if (context === undefined) {
        throw new Error('useSupabase must be used inside SupabaseProvider')
    }

    return context
}