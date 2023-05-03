'use client'

import { useSupabase } from "../supabase-provider"
import Image from "next/image"

export default function Logout({ session }) {
    const { supabase } = useSupabase()
    console.log("gelen veri => ", session)
    return (
        <div className="h-screen flex flex-col gap-y-5 justify-center items-center">
            <Image src={session.user.user_metadata.avatar_url} width="100" height="100" alt="avatar" />
            <p>Welcome {session.user.user_metadata.full_name}</p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:drop-shadow-2xl" onClick={async () => await supabase.auth.signOut()}>
                Logout
            </button>
        </div>
    )
}