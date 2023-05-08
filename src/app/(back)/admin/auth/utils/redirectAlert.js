export default function redirectAlert(where) {
    const alert = {
        title: "",
        message: "",
    }

    if (where === "register") {
        alert.title = "Kayıt işlemi başarılı!"
        alert.message = "Hesabınızı doğrulamak için lütfen e-posta adresinize gelen bağlantıya tıklayın."
    } else if (where === "password") {
        alert.title = "Sıfırlama e-postası gönderildi!"
        alert.message = "E-posta adresinize gelen şifre sıfırlama bağlantısına tıklayın."
    } else if (where === "reset") {
        alert.title = "Parola güncellendi!"
        alert.message = "Parolanız başarılya güncellendi. Yeni parolanız ile giriş yapabilirsiniz."
    }

    return alert
}