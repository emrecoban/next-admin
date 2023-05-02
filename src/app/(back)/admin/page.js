'use client'

import { useSupabase } from "../supabase-provider"

export default function Admin() {
    const { supabase } = useSupabase()
    return (
        <div className="h-screen flex justify-center items-center">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:drop-shadow-2xl" onClick={() => supabase.auth.signInWithOAuth({
                provider: "github"
            })}>
                Login with GitHub
            </button>
        </div>
    )
}