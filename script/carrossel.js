let radio = document.querySelectorAll('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

radio.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        cont = index + 1;
    });
});

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > radio.length){
        cont = 1
    }

    document.getElementById(`radio${cont}`).checked = true
}