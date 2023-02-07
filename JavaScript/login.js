class usuario {
    constructor(username, password) {
        this.username = username
        this.password = password
    }
    setUsername(newUsername) {
        if (usename != '') {
            this.username = newUsername
        }
    }
    setPassword(newPassword) {
        if (password != '') {
            this.password = newPassword
        }
    }
}

let objectLocalStorage = JSON.parse(localStorage.getItem("usuario"))

if (objectLocalStorage) {
    let usu = new usuario(objectLocalStorage.username, objectLocalStorage.password)
    console.log(usu)
    asignarValoresSignIn(usu)

} else {
    let usu = new usuario('','','','')
    asignarValoresSignIn(usu)
}

document.getElementById("form-user").addEventListener("submit", saveDataSignIn);

// let varUsername = localStorage.getItem('inputEmailSignIn',valueInputUsername)
// let varPassword = localStorage.getItem('inputPasswordSignIn',valueInputPassword)
// let varEmail = localStorage.getItem('inputEmail',valueInputEmail)
// let varPass = localStorage.getItem('inputPasswordSignIn',valueInputPass)


//FUNCION GUARDAR
function saveDataSignIn(e) {
    e.preventDefault();

    let valueInputUsername = document.getElementById("div-email__input").value
    let valueInputPassword = document.getElementById("div-password__input").value
    let valueInputEmail = localStorage.getItem('inputEmail')
    let valueInputPass = localStorage.getItem('inputPassword',)
    
    if (valueInputUsername === valueInputEmail){
        console.log(valueInputUsername)
        if (valueInputPass === valueInputPassword){
            console.log(valueInputPass)
        }
    }

    localStorage.setItem('div-email__input',valueInputUsername)
    localStorage.setItem('div-password__input',valueInputPassword)
}

//FUNCION ASIGNAR VALORES
function asignarValoresSignIn(usu) {
    if (usu.firstName != '') {
        document.getElementById("div-email__input").value = usu.username
        document.getElementById("div-password__input").value = usu.password
    } else {
        document.getElementById("div-login__title").innerHTML = `Hola, por favor dinos tus datos`
    }
}