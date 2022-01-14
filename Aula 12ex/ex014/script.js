function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'Manha.png'
        document.body.style.background = '#E1DEDF'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'Tarde.png'
        document.body.style.background = '#FC7700'
    } else {
        //Boa Noite!
        img.src = 'Noite.png'
        document.body.style.background = '#014E58'
    }
}

