'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {

    /*     useEffect(() => {
            console.log("hata mesajı=>", error?.message)
        }, [error]) */

    return (
        <>
            <h1>Bir hata oluştu!</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Tekrar dene</button>
        </>
    )
}