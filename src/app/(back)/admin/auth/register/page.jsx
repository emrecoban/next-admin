'use client'

import { useSupabase } from "../../../provider/supabase"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import translateError from "../utils/translateError"
import * as Yup from 'yup';

export default function RegisterPage() {
    const router = useRouter()
    const { supabase } = useSupabase()
    const [errText, setErrText] = useState(false)
    const [submit, setSubmit] = useState(true)
    const [spinner, setSpinner] = useState(false)
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rules_accept: false,
    })

    const formSchema = Yup.object({
        fullName: Yup.string().min(3).max(32).matches(/^[a-zA-Z ]+$/, 'Geçersiz isim').required("Ad alanı zorunludur"),
        email: Yup.string().email("Geçersiz e-posta adresi").required("E-posta adresi gerekli"),
        password: Yup.string().min(8).max(32).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Şifreler eşleşmiyor"),
        rules_accept: Yup.boolean().oneOf([true], "Kullanım şartlarını kabul etmelisiniz"),
    })

    useEffect(() => {
        (async () => {
            const isValid = await formSchema.isValid({
                fullName: form.fullName,
                email: form.email,
                password: form.password,
                confirmPassword: form.confirmPassword,
                rules_accept: form.rules_accept,
            })
            if (isValid) {
                setSubmit(false)
            } else {
                setSubmit(true)
            }
        })()
    }, [form, formSchema])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase.auth.signUp(
            {
                email: form.email,
                password: form.password,
                options: {
                    data: { full_name: form.fullName }
                }
            }
        )

        data.user && data.user.identities && data.user.identities.length === 0 && setErrText("Bu e-posta adresi kullanılıyor")
        error && setErrText(error || "Bilinmeyen bir hata oluştu.")

        if (!error && data.user.identities.length != 0) {
            router.push('/admin/auth/login?from=register')
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setForm(prevData => ({
            ...prevData,
            [name]: e.target.type === 'checkbox' ? e.target.checked : value,
        }))
    }

    return (
        <>

            {/* Alerts: Error */}
            {errText && (
                <div className="p-4 md:p-5 mb-6 rounded text-red-700 bg-red-100">
                    <div className="flex items-center mb-2">
                        <svg className="hi-solid hi-check-circle inline-block w-5 h-5 mr-3 flex-none text-red-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z" /></svg>
                        <h3 className="font-semibold">Bir hata oluştu!</h3>
                    </div>
                    <p className="ml-8">
                        {translateError(errText.message || errText)}</p>
                </div>
            )}
            {/* END Alerts: Error */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                    <label htmlFor="fullName" className="text-sm font-medium">Ad</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Adınızı girin" autoComplete="off" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        onChange={(e) => handleInput(e)}
                        value={form.fullName} />
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">E-posta</label>
                    <input type="email" id="email" name="email" placeholder="E-posta adresinizi girin" autoComplete="off" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        onChange={(e) => handleInput(e)}
                        value={form.email} />
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="text-sm font-medium">Parola</label>
                    <input type="password" id="password" name="password" placeholder="Bir parola belirleyin" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        onChange={(e) => handleInput(e)}
                        value={form.password} />
                </div>
                <div className="space-y-1">
                    <label htmlFor="confirmPassword" className="text-sm font-medium">Parola Onayla</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Belirlediğiniz parolayı tekrar girin" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        onChange={(e) => handleInput(e)}
                        value={form.confirmPassword} />
                </div>
                <label className="flex items-center">
                    <input type="checkbox" id="rules_accept" name="rules_accept" className="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 hover:cursor-pointer"
                        onChange={(e) => handleInput(e)}
                        checked={form.rules_accept} />
                    <span className="text-sm ml-2 hover:cursor-pointer">Kullanım şartlarını kabul ediyorum.</span>
                </label>
                <div>
                    <button type="submit" className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-green-600 bg-lime-600 text-white hover:text-white hover:bg-lime-700 hover:border-green-700 focus:ring focus:ring-lime-400 focus:ring-opacity-50 active:bg-lime-600 active:border-green-700 disabled:bg-gray-400 disabled:border-gray-300" disabled={submit}>
                        <svg className="hi-mini hi-arrow-uturn-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z" clipRule="evenodd" /></svg>
                        <span>Kayıt Ol</span>
                    </button>
                </div>
            </form>
        </>
    )
}