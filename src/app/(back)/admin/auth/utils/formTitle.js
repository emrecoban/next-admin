export default function exportTitle(path) {
    let msg = ""
    switch (path) {
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
    return msg
}