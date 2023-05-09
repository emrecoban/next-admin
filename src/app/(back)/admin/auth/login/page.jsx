'use client'

import { useSupabase } from "../../../provider/supabase"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react"
import translateError from "../utils/translateError"
import redirectAlert from "../utils/redirectAlert"
import Loading from "../components/Loading"
import { object, string } from 'yup'

export default function LoginPage() {
    const fromWhere = useSearchParams().get('from')
    const { supabase } = useSupabase()
    const [errText, setErrText] = useState(false)
    const [submit, setSubmit] = useState(true)
    const [spinner, setSpinner] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" })

    const formSchema = object({
        email: string().email("Geçersiz e-posta adresi").required("E-posta adresi gerekli"),
        password: string().min(8).max(32).required(),
    })

    useEffect(() => {
        (async () => {
            const isValid = await formSchema.isValid({
                email: form.email,
                password: form.password,
            })
            if (isValid) {
                setSubmit(false)
            } else {
                setSubmit(true)
            }
        })()
    }, [form, formSchema])

    useEffect(() => { fromWhere == "mail" && setSpinner(true) }, [fromWhere])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSpinner(true)

        const { error } = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password,
        });

        if (error) {
            setErrText(error || "Bilinmeyen bir hata oluştu.")
            setSpinner(false)
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setForm(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    return (
        <>
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-2xl font-bold inline-flex items-center mb-2 space-x-2">
                    <svg className="hi-mini hi-cube-transparent inline-block w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
                    <span>NextCongress</span>
                </h1>
                <h2 className="text-sm font-medium text-gray-500">Hoş geldiniz, giriş yapmak için lütfen kullanıcı bilgilerinizi girin.</h2>
            </header>
            {/* END Header */}
            {/* Form */}
            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden">
                {spinner ? <Loading /> : (
                    <>
                        <div className="p-5 md:px-16 md:py-12 grow">
                            {/* Alerts: Error */}
                            {errText && (
                                <div className="p-4 md:p-5 mb-6 rounded text-red-700 bg-red-100">
                                    <div className="flex items-center mb-2">
                                        <svg className="hi-solid hi-check-circle inline-block w-5 h-5 mr-3 flex-none text-red-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z" /></svg>
                                        <h3 className="font-semibold">Bir hata oluştu!</h3>
                                    </div>
                                    <p className="ml-8">
                                        {translateError(errText.message)}</p>
                                </div>
                            )}
                            {/* END Alerts: Error */}
                            {/* Alerts: Success */}
                            {(fromWhere == "register" || fromWhere == "password" || fromWhere == "reset") && (
                                <div className="p-4 md:p-5 mb-6 rounded text-emerald-700 bg-emerald-100">
                                    <div className="flex items-center mb-2">
                                        <svg className="hi-solid hi-check-circle inline-block w-5 h-5 mr-3 flex-none text-emerald-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <h3 className="font-semibold">{redirectAlert(fromWhere).title}</h3>
                                    </div>
                                    <p className="ml-8">{redirectAlert(fromWhere).message}
                                    </p>
                                </div>
                            )}
                            {/* END Alerts: Success */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-sm font-medium">E-posta</label>
                                    <input type="email" id="email" name="email" autoComplete="off" placeholder="E-posta adresinizi girin" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        onChange={(e) => handleInput(e)}
                                        value={form.email}
                                    />
                                </div>
                                <div className="space-y-1">

                                    <div className="flex items-center justify-between space-x-2">
                                        <label htmlFor="password" className="text-sm font-medium">Parola</label>
                                        <Link href="/admin/auth/password" className="text-sm font-medium inline-block text-blue-600 hover:text-blue-400">Şifremi Unuttum</Link>
                                    </div>
                                    <input type="password" id="password" name="password" placeholder="Parolanızı girin" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        onChange={(e) => handleInput(e)}
                                        value={form.password}
                                    />
                                </div>
                                <div>

                                    <button type="submit" className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 disabled:bg-gray-400 disabled:border-gray-300"
                                        disabled={submit}>
                                        <svg className="hi-mini hi-arrow-uturn-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z" clipRule="evenodd" /></svg>
                                        <span>Giriş Yap</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="p-5 md:px-16 grow text-sm text-center bg-gray-50">
                            <Link href="/admin/auth/register" className="font-medium text-blue-600 hover:text-blue-400">Yeni Hesap Oluştur</Link>
                        </div>
                    </>
                )}

            </div>
            {/* END Sign In Form */}
        </>
    )
}
