function tabuada() {
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let contador = 1
        tab.innerHTML = ''
        for (contador = 1; contador <= 10; contador ++) {
             let item = document.createElement('option')
             item.text = `${n} X ${contador} = ${n*contador}`
             item.value = `tab${contador}`
             tab.appendChild(item)
        }
    }
    
}