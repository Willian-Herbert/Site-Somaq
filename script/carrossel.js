let radio = document.querySelectorAll('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 6){
        cont = 1
    }

    document.getElementById(`radio${cont}`).checked = true
}