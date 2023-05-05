import LoginPage from "./LoginPage"
import PasswordPage from "./PasswordPage"
import RegisterPage from "./RegisterPage"

export default function Auth({ params }) {
    if (params.to === "register") return (<RegisterPage />)
    if (params.to === "password") return (<PasswordPage />)
    return (<LoginPage />);
}