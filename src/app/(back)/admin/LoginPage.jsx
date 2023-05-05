'use client'

import { useSupabase } from "../provider/supabase"

export default function LoginPage() {
    const { supabase } = useSupabase()
    return (
        <>
            {/* Pages: Sign In: Boxed */}

            {/* Page Container */}
            <div id="page-container" className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
                {/* Page Content */}
                <main id="page-content" className="flex flex-auto flex-col max-w-full">
                    <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
                        {/* Sign In Section */}
                        <section className="py-6 w-full max-w-xl">
                            {/* Header */}
                            <header className="mb-10 text-center">
                                <h1 className="text-2xl font-bold inline-flex items-center mb-2 space-x-2">
                                    <svg className="hi-mini hi-cube-transparent inline-block w-5 h-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
                                    <span>Company</span>
                                </h1>
                                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Welcome, please sign in to your dashboard
                                </h2>
                            </header>
                            {/* END Header */}

                            {/* Sign In Form */}
                            <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
                                <div className="p-5 md:px-16 md:py-12 grow">
                                    <form className="space-y-6">
                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                                            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                                            <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between space-x-2 mb-5">
                                                <label className="flex items-center">
                                                    <input type="checkbox" id="remember_me" name="remember_me" className="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:ring-offset-gray-900 dark:focus:border-blue-500 dark:checked:bg-blue-500 dark:checked:border-transparent" />
                                                    <span className="text-sm ml-2">Remember me</span>
                                                </label>
                                                <a href="#" className="text-sm font-medium inline-block text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Forgot Password?</a>
                                            </div>
                                            <button type="submit" className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                                <svg className="hi-mini hi-arrow-uturn-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z" clipRule="evenodd" /></svg>
                                                <span>Sign In</span>
                                            </button>
                                            {/* Divider: With Label */}
                                            <div className="flex items-center my-5">
                                                <span aria-hidden="true" className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75" />
                                                <span className="text-xs font-medium text-gray-800 bg-gray-100 rounded-full px-3 py-1 dark:bg-gray-700 dark:text-gray-200">or sign in with</span>
                                                <span aria-hidden="true" className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75" />
                                            </div>
                                            {/* END Divider: With Label */}
                                            <div className="grid grid-cols-2 gap-2">
                                                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                                                    <svg className="bi bi-facebook inline-block w-4 h-4 text-[#1877f2]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /></svg>
                                                    <span>Facebook</span>
                                                </button>
                                                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                                                    <svg className="bi bi-twitter inline-block w-4 h-4 text-[#1da1f2]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /></svg>
                                                    <span>Twitter</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="p-5 md:px-16 grow text-sm text-center bg-gray-50 dark:bg-gray-700/50">
                                    Don’t have an account yet?
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Sign up</a>
                                </div>
                            </div>
                            {/* END Sign In Form */}

                            {/* Footer */}
                            <div className="text-sm text-gray-500 text-center mt-6 dark:text-gray-400">
                                Powered by <a href="#" className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Tailkit</a>
                            </div>
                            {/* END Footer */}
                        </section>
                        {/* END Sign In Section */}
                    </div>
                </main>
                {/* END Page Content */}
            </div>
            {/* END Page Container */}

            {/* END Pages: Sign In: Boxed */}
        </>
    )
}

{/* <div className="h-screen flex justify-center items-center">
    <button className="bg-black text-white px-8 py-3 rounded-md hover:drop-shadow-2xl" onClick={() => supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: 'http://localhost:3000/admin'
        }
    })}>
        Login with GitHub
    </button>
</div> */}