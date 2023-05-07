export default function FormTitle({ route }) {
    let msg = ""
    switch (route) {
        case "login":
            msg = "Hoş geldiniz, giriş yapmak için lütfen kullanıcı bilgilerinizi girin."
            break
        case "register":
            msg = "Bir adımda kendi hesabınızı oluşturun."
            break
        case "password":
            msg = "Parolanızı yenilemek için giriş yaparken kullandığınız e-posta adresinizi girin."
            break
        default:
            msg = "Bulunamadı."
    }
    return (
        <h2 className="text-sm font-medium text-gray-500">{msg}</h2>
    )
}