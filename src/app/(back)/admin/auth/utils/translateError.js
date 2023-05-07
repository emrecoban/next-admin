export default function translateError(msg) {
    if (msg === "Invalid login credentials") return "E-posta adresi veya parola yanlış"
    if (msg === "You must provide either an email or phone number and a password") return "E-posta adresi geçersiz"
    if (msg.startsWith("For security")) return "Çok fazla giriş denemesi yapıldığı için bir süre sonra tekrar deneyin"
    return msg
}