let msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}

//Data do rodapé
let data = new Date()
let msg = document.getElementById('msg-direitos')

msg.innerHTML = (`${data.getFullYear()} | &copy; Somaq Automação | Todos os Direitos Reservados`)