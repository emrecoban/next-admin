export default function redirectAlert(where) {
    const alert = {
        title: "",
        message: "",
    }

    if (where === "register") {
        alert.title = "Kayıt işlemi başarılı!"
        alert.message = "Hesabınızı doğrulamak için lütfen e-posta adresinize gelen bağlantıya tıklayın."
    } else if (where === "forgot") {
        alert.title = "Sıfırlama e-postası gönderildi!"
        alert.message = "E-posta adresinize gelen şifre sıfırlama bağlantısına tıklayın."
    }

    return alert
}