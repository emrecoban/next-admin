import LoginPage from "./LoginPage"

export default function Auth({ params }) {
    if (params.to === "login") return (<LoginPage />)
    if (params.to === "register") return (<LoginPage />)
    if (params.to === "password") return (<LoginPage />)
}