'use client'

import { useSupabase } from "../provider/supabase"
import { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import Image from "next/image"


export default function Logout({ session }) {
    const { supabase } = useSupabase()
    const [userDropdownOpen, setUserDropdownOpen] = useState(false)
    const [mobileNavMenu, setMobileNavMenu] = useState(false)
    console.log("gelen veri => ", session)
    //commit 2 May 4
    return (
        <>
            {/* Page Container */}
            <div
                id="page-container"
                className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-slate-100"
            >
                {/* Page Header */}
                <header id="page-header" className="z-1 flex flex-none items-center">
                    <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
                        <div className="flex justify-between border-b-2 border-slate-200/50 py-6">
                            {/* Left Section */}
                            <div className="flex items-center">
                                {/* Logo */}
                                <a
                                    href="javascript:void(0)"
                                    className="text-md group inline-flex items-center space-x-1 font-bold tracking-wide text-slate-700 hover:text-blue-600 active:text-slate-700 sm:text-lg"
                                >
                                    <svg
                                        className="hi-mini hi-square-3-stack-3d inline-block h-5 w-5 rotate-90 text-blue-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" />
                                        <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" />
                                        <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" />
                                    </svg>
                                    <span>NextAdmin</span>
                                </a>
                                {/* END Logo */}
                            </div>
                            {/* END Left Section */}
                            {/* Right Section */}
                            <div className="flex items-center space-x-1 lg:space-x-5">
                                {/* Header Navigation */}
                                <nav className="flex items-center space-x-2">
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100 hover:text-indigo-600 active:border-indigo-200 active:bg-indigo-100 sm:space-x-2"
                                    >
                                        <svg
                                            className="hi-mini hi-flag inline-block h-5 w-5 text-slate-300 group-hover:text-indigo-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                                        </svg>
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-900">
                                            3
                                        </span>
                                    </a>
                                </nav>
                                {/* END Header Navigation */}
                                {/* User Dropdown */}
                                <Menu as="div" className="relative inline-block">
                                    {/* Dropdown Toggle Button */}
                                    <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none">
                                        <span className="flex gap-x-2 items-center"><Image src={session.user.user_metadata.avatar_url} width="20" height="20" alt="avatar" className="rounded-xl" /> {session.user.user_metadata.full_name}</span>
                                        <svg className="hi-mini hi-chevron-down inline-block w-5 h-5 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                                    </Menu.Button>
                                    {/* END Dropdown Toggle Button */}

                                    {/* Dropdown */}
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="opacity-0 scale-90"
                                        enterTo="opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-90"
                                    >
                                        <Menu.Items className="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded-lg  focus:outline-none">
                                            <div className="bg-white ring-1 ring-black ring-opacity-5 rounded-lg divide-y divide-gray-100">
                                                <div className="p-2.5 space-y-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 border-blue-100" : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 "
                                                                    }`}
                                                            >
                                                                <svg className="flex-none hi-mini hi-inbox inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z" clipRule="evenodd" /></svg>
                                                                <span className="grow">Inbox</span>
                                                                <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-blue-200 text-blue-700 bg-blue-100">2</div>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 border-blue-100 " : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 "
                                                                    }`}
                                                            >
                                                                <svg className="flex-none hi-mini hi-flag inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" /></svg>
                                                                <span className="grow">Notifications</span>
                                                                <div className="font-semibold inline-flex px-1.5 py-0.5 leading-4 text-xs rounded-full border border-blue-200 text-blue-700 bg-blue-100 ">5</div>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="p-2.5 space-y-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 border-blue-100 " : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100"
                                                                    }`}
                                                            >
                                                                <svg className="flex-none hi-mini hi-user-circle inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" /></svg>
                                                                <span className="grow">Account</span>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={`group text-sm font-medium flex items-center justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 border-blue-100 " : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 "
                                                                    }`}
                                                            >
                                                                <svg className="flex-none hi-mini hi-cog-6-tooth inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                                                                <span className="grow">Settings</span>
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="p-2.5 space-y-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={async () => await supabase.auth.signOut()}
                                                                className={`group w-full text-sm font-medium flex items-center
                                                                text-left justify-between space-x-2 px-2.5 py-2 rounded-lg border border-transparent ${active ? "text-blue-800 bg-blue-50 border-blue-100 " : "hover:text-blue-800 hover:bg-blue-50 active:border-blue-100 "
                                                                    }`}
                                                            >
                                                                <svg className="flex-none hi-mini hi-lock-closed inline-block w-5 h-5 opacity-25 group-hover:opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
                                                                <span className="grow">Sign out</span>
                                                            </button>

                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                    {/* END Dropdown */}
                                </Menu>
                                {/* END User Dropdown */}
                                {/* Toggle Mobile Navigation */}
                                <div className="lg:hidden">
                                    <button
                                        onClick={() => setMobileNavMenu(!mobileNavMenu)}
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none "
                                    >
                                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-5 h-5"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    </button>
                                </div>
                                {/* END Toggle Mobile Navigation */}
                            </div>
                            {/* END Right Section */}
                        </div>
                        {/* Mobile Navigation */}
                        <div
                            className={`lg:hidden ${mobileNavMenu ? "" : "hidden"
                                }`}
                        >
                            <nav className="flex flex-col py-4 lg:hidden">
                                <a
                                    href="javascript:void(0)"
                                    className="group flex items-center justify-between space-x-2 rounded-md border border-blue-50 bg-blue-100 px-2.5 py-2 text-sm font-semibold text-blue-600 active:border-indigo-200"
                                >
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="hi-solid hi-home inline-block h-5 w-5 flex-none"
                                    >
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <span className="grow">Dashboard</span>
                                </a>
                                <hr className="h-5 border-0" />
                                <div className="space-y-1.5">
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-cursor-arrow-rays inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="grow">Sales</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            250
                                        </span>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-chart-bar inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                                        </svg>
                                        <span className="grow">Analytics</span>
                                    </a>
                                </div>
                                <hr className="h-5 border-0" />
                                <div className="space-y-1.5">
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-user-group inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                        </svg>
                                        <span className="grow">Users</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            563
                                        </span>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-briefcase inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                                                clipRule="evenodd"
                                            />
                                            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                                        </svg>
                                        <span className="grow">Projects</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            1.2k
                                        </span>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-document-text inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="grow">Invoices</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            7.5k
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        {/* END Mobile Navigation */}
                    </div>
                </header>
                {/* END Page Header */}
                {/* Page Content */}
                <main id="page-content" className="flex max-w-full flex-auto flex-col">
                    <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
                        <div className="grid grid-cols-1 md:gap-20 lg:grid-cols-12">
                            {/* Navigation */}
                            <nav className="hidden lg:col-span-3 lg:block">
                                <a
                                    href="javascript:void(0)"
                                    className="group flex items-center justify-between space-x-2 rounded-md border border-blue-100 bg-blue-50 px-2.5 py-2 text-sm font-semibold text-blue-600 active:border-indigo-200"
                                >
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="hi-solid hi-home inline-block h-5 w-5 flex-none"
                                    >
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <span className="grow">Başlangıç</span>
                                </a>
                                <hr className="h-5 border-0" />
                                <div className="space-y-1.5">
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-cursor-arrow-rays inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="grow">Sales</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            250
                                        </span>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-chart-bar inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                                        </svg>
                                        <span className="grow">Analytics</span>
                                    </a>
                                </div>
                                <hr className="h-5 border-0" />
                                <div className="space-y-1.5">
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-user-group inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                        </svg>
                                        <span className="grow">Users</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            563
                                        </span>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-briefcase inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                                                clipRule="evenodd"
                                            />
                                            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                                        </svg>
                                        <span className="grow">Projects</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            1.2k
                                        </span>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-document-text inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="grow">Invoices</span>
                                        <span className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 px-1 text-xs text-indigo-900">
                                            7.5k
                                        </span>
                                    </a>
                                </div>
                                <hr className="h-5 border-0" />
                                <div className="space-y-1.5">
                                    <a
                                        href="javascript:void(0)"
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="hi-solid hi-user-circle inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="grow">Account</span>
                                    </a>
                                    <a
                                        onClick={async () => await supabase.auth.signOut()}
                                        className="group flex items-center justify-between space-x-2 rounded-md border border-transparent px-2.5 py-2 text-sm font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-100 active:border-blue-100"
                                    >
                                        <svg
                                            className="hi-mini hi-lock-closed inline-block h-5 w-5 flex-none text-slate-300 group-hover:text-blue-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="grow">Logout</span>
                                    </a>
                                </div>
                            </nav>
                            {/* END Navigation */}
                            {/* Main Content */}
                            <div className="lg:col-span-9">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 md:gap-6">
                                    <div className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3">
                                        <dl>
                                            <dt className="text-2xl font-bold">63</dt>
                                            <dd className="text-sm font-medium text-slate-500">
                                                Accounts today
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3">
                                        <dl>
                                            <dt className="text-2xl font-bold">6</dt>
                                            <dd className="text-sm font-medium text-slate-500">
                                                Sales today
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3">
                                        <dl>
                                            <dt className="text-2xl font-bold">5</dt>
                                            <dd className="text-sm font-medium text-slate-500">
                                                Open Tickets
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="rounded-lg border border-slate-200 bg-white p-6 sm:col-span-6 xl:col-span-3">
                                        <dl>
                                            <dt className="text-2xl font-bold">10</dt>
                                            <dd className="text-sm font-medium text-slate-500">
                                                Pending Invoices
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:col-span-12 lg:col-span-6">
                                        <dl className="px-6 pt-6">
                                            <dt className="text-2xl font-bold">$168,682</dt>
                                            <dd className="text-sm font-medium text-slate-500">
                                                Total Earnings
                                            </dd>
                                        </dl>
                                        <div className="-m-2">
                                            <svg
                                                className="w-auto text-indigo-100"
                                                fill="currentColor"
                                                viewBox="0 0 1000 500"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M 0,493.9109719606716 C 14.200000000000001,490.40802978683513 42.60000000000001,487.5791262811064 71,476.39626109148924 C 99.4,465.21339590187205 113.6,453.15974467495977 142,437.99664601258576 C 170.4,422.8335473502118 184.6,406.98651600999744 213,400.58076777961935 C 241.4,394.17501954924126 255.6,416.4756240849917 284,405.9679048606953 C 312.4,395.46018563639893 326.6,358.32287941899733 355,348.0421716581375 C 383.4,337.7614638972776 397.6,368.4679124832968 426,354.5643660563959 C 454.4,340.660819629495 468.6,300.30672545627453 497,278.5244395236329 C 525.4,256.7421535909913 539.6,252.0730672209553 568,245.65293639318784 C 596.4,239.23280556542042 610.6,231.89211788080013 639,246.42378538479574 C 667.4,260.95545288879134 681.6,336.33567203932097 710,318.3112739131659 C 738.4,300.28687578701084 752.6,166.6854990107404 781,156.30179475402042 C 809.4,145.91809049730045 823.6,289.85843160308036 852,266.3927526295661 C 880.4,242.92707365605182 894.6,59.99402379966443 923,38.9733998864491 C 951.4,17.952775973233773 979.8,136.82638642808135 994,161.28963306348942,L 1000 500,L 0 500Z"
                                                    fill="#E0E7FF"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:col-span-12 lg:col-span-6">
                                        <dl className="px-6 pt-6">
                                            <dt className="text-2xl font-bold">768,541</dt>
                                            <dd className="text-sm font-medium text-slate-500">
                                                Total Pageviews
                                            </dd>
                                        </dl>
                                        <div className="-m-2">
                                            <svg
                                                className="w-auto text-indigo-100"
                                                fill="currentColor"
                                                viewBox="0 0 1000 500"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M 0,491.97664735392186 C 14.2,487.6342321000262 42.599999999999994,479.4664419168693 71,470.26457108444356 C 99.4,461.0627002520178 113.6,460.88088046251244 142,445.967293191793 C 170.4,431.0537059210735 184.6,401.92769317557264 213,395.6966347308462 C 241.4,389.46557628611976 255.6,425.8825606617139 284,414.8120009681609 C 312.4,403.74144127460784 326.6,363.99447099184636 355,340.343836263081 C 383.4,316.6932015343157 397.6,303.4354664839433 426,296.5588273243342 C 454.4,289.68218816472506 468.6,313.94896637638396 497,305.96064046503545 C 525.4,297.97231455368694 539.6,258.86629470075934 568,256.61719776759156 C 596.4,254.36810083442379 610.6,314.6658746403039 639,294.7151557991966 C 667.4,274.76443695808933 681.6,173.183035720006 710,156.863603562055 C 738.4,140.54417140410402 752.6,214.65802978224644 781,213.11799500944176 C 809.4,211.57796023663707 823.6,150.70388385188858 852,149.16342969803156 C 880.4,147.62297554417455 894.6,213.57548048920893 923,205.4157242401567 C 951.4,197.25596799110446 979.8,127.77486361024759 994,108.36464845277033,L 1000 500,L 0 500Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:col-span-12">
                                        <div className="px-6 pt-6">
                                            <h2 className="text-2xl font-bold">Latest Sales</h2>
                                            <h3 className="text-sm font-medium text-slate-500">
                                                You have 6 new sales today, keep it up!
                                            </h3>
                                        </div>
                                        <div className="p-6">
                                            {/* Responsive Table Container */}
                                            <div className="min-w-full overflow-x-auto rounded">
                                                {/* Alternate Responsive Table */}
                                                <table className="min-w-full align-middle text-sm">
                                                    {/* Table Header */}
                                                    <thead>
                                                        <tr className="border-b-2 border-slate-100">
                                                            <th className="px-3 py-2 text-left text-sm font-semibold uppercase tracking-wider text-slate-700">
                                                                id
                                                            </th>
                                                            <th className="hidden px-3 py-2 text-left text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell">
                                                                Email
                                                            </th>
                                                            <th className="hidden px-3 py-2 text-left text-sm font-semibold uppercase tracking-wider text-slate-700 md:table-cell">
                                                                Status
                                                            </th>
                                                            <th className="px-3 py-2 text-right text-sm font-semibold uppercase tracking-wider text-slate-700">
                                                                Total
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {/* END Table Header */}
                                                    {/* Table Body */}
                                                    <tbody>
                                                        <tr>
                                                            <td className="p-3 text-left">
                                                                <a
                                                                    className="font-medium text-indigo-500 hover:text-indigo-700"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    order_0006578
                                                                </a>
                                                            </td>
                                                            <td className="hidden p-3 text-slate-600 md:table-cell">
                                                                g.taylor@example.com
                                                            </td>
                                                            <td className="hidden p-3 text-left md:table-cell">
                                                                <div className="inline-block rounded-full border border-orange-200 bg-orange-50 px-2 py-1 text-xs font-semibold leading-4 text-orange-700">
                                                                    Pending
                                                                </div>
                                                            </td>
                                                            <td className="p-3 text-right font-medium">
                                                                $185.13
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-slate-50">
                                                            <td className="p-3 text-left">
                                                                <a
                                                                    className="font-medium text-indigo-500 hover:text-indigo-700"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    order_0006577
                                                                </a>
                                                            </td>
                                                            <td className="hidden p-3 text-slate-600 md:table-cell">
                                                                j.keily@example.com
                                                            </td>
                                                            <td className="hidden p-3 text-left md:table-cell">
                                                                <div className="inline-block rounded-full border border-orange-200 bg-orange-50 px-2 py-1 text-xs font-semibold leading-4 text-orange-700">
                                                                    Pending
                                                                </div>
                                                            </td>
                                                            <td className="p-3 text-right font-medium">
                                                                $280.63
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-3 text-left">
                                                                <a
                                                                    className="font-medium text-indigo-500 hover:text-indigo-700"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    order_0006576
                                                                </a>
                                                            </td>
                                                            <td className="hidden p-3 text-slate-600 md:table-cell">
                                                                n.hart@example.com
                                                            </td>
                                                            <td className="hidden p-3 text-left md:table-cell">
                                                                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700">
                                                                    Completed
                                                                </div>
                                                            </td>
                                                            <td className="p-3 text-right font-medium">
                                                                $110.69
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-slate-50">
                                                            <td className="p-3 text-left">
                                                                <a
                                                                    className="font-medium text-indigo-500 hover:text-indigo-700"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    order_0006575
                                                                </a>
                                                            </td>
                                                            <td className="hidden p-3 text-slate-600 md:table-cell">
                                                                j.doe@example.com
                                                            </td>
                                                            <td className="hidden p-3 text-left md:table-cell">
                                                                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700">
                                                                    Completed
                                                                </div>
                                                            </td>
                                                            <td className="p-3 text-right font-medium">
                                                                $120.37
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-3 text-left">
                                                                <a
                                                                    className="font-medium text-indigo-500 hover:text-indigo-700"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    order_0006574
                                                                </a>
                                                            </td>
                                                            <td className="hidden p-3 text-slate-600 md:table-cell">
                                                                o.smith@example.com
                                                            </td>
                                                            <td className="hidden p-3 text-left md:table-cell">
                                                                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700">
                                                                    Completed
                                                                </div>
                                                            </td>
                                                            <td className="p-3 text-right font-medium">
                                                                $150.27
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-slate-50">
                                                            <td className="p-3 text-left">
                                                                <a
                                                                    className="font-medium text-indigo-500 hover:text-indigo-700"
                                                                    href="javascript:void(0)"
                                                                >
                                                                    order_0006573
                                                                </a>
                                                            </td>
                                                            <td className="hidden p-3 text-slate-600 md:table-cell">
                                                                n.hart@example.com
                                                            </td>
                                                            <td className="hidden p-3 text-left md:table-cell">
                                                                <div className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold leading-4 text-emerald-700">
                                                                    Completed
                                                                </div>
                                                            </td>
                                                            <td className="p-3 text-right font-medium">
                                                                $215.25
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {/* END Table Body */}
                                                </table>
                                                {/* END Alternate Responsive Table */}
                                            </div>
                                            {/* END Responsive Table Container */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END Main Content */}
                        </div>
                    </div>
                </main>
                {/* END Page Content */}
                {/* Page Footer */}
                <footer id="page-footer" className="flex grow-0 items-center">
                    <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
                        <div className="flex flex-col space-y-2 border-t-2 border-slate-200/50 py-6 text-center text-sm font-medium text-slate-600 md:flex-row md:justify-between md:space-y-0 md:text-left">
                            <div>
                                © <span className="font-semibold">2023 NextAdmin.</span>
                            </div>
                            <div className="inline-flex items-center justify-center">
                                <span>Built with</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="mx-1 h-4 w-4 text-red-600"
                                >
                                    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                                </svg>
                                <span>
                                    by <a
                                        className="font-medium text-indigo-600 transition hover:text-indigo-700"
                                        href="https://github.com/emrecoban"
                                        target="_blank"
                                    >emrecoban</a>.
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* END Page Footer */}
            </div>
            {/* END Page Container */}
        </>
    )
}

{/* 
<div className="h-screen flex flex-col gap-y-5 justify-center items-center">
            
            <p>Welcome </p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:drop-shadow-2xl" onClick={async () => await supabase.auth.signOut()}>
                Logout
            </button>
        </div>
*/ }