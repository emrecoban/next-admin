'use client'

import { useSupabase } from "../../../provider/supabase"
import Link from "next/link"

export default function PasswordPage() {
    const { supabase } = useSupabase()
    return (
        <>
            <form className="space-y-6">
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">E-posta</label>
                    <input type="email" id="email" name="email" placeholder="E-posta adresinizi girin" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                </div>
                <div>
                    <button type="submit" className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
                        <span>Şifremi Yenile</span>
                    </button>
                </div>
            </form>
        </>
    )
}