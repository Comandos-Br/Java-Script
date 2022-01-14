function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document. createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem' 
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'Bebe H.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Jovem H.png')
            } else if (idade < 50) {
                // Aduto
                img.setAttribute('src', 'Adulto H.png')
            } else {
                // Idoso
                img.setAttribute('src', 'Idoso H.png')
            }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'Bebe M.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'Jovem M.png')
        } else if (idade < 50) {
            // Aduto
            img.setAttribute('src', 'Adulto M.png')
        } else {
            // Idoso
            img.setAttribute('src', 'Idoso M.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
    
    res.appendChild(img) 
  }

}