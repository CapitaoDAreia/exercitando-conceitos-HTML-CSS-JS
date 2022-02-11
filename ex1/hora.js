function hora(){
    let alerta = document.getElementById('alerta')
    let imagem = document.getElementById('imagem')
    let conteudo = document.getElementById('content')

    let data = new Date()

    alerta.innerHTML = `Agora são ${data.getHours()}h.`
    
    let horaexata = data.getHours()
    //dia
    if (horaexata >= 6 && horaexata < 12){
        alerta.innerHTML += `<br>Bom dia!`
        imagem.src = "https://picsum.photos/id/1015/200/200"
        document.body.style.backgroundColor = "#2666CF"
        document.body.style.color = "white"
        conteudo.style.backgroundColor = "#7882A4"
        conteudo.style.border = "none"
        }
        //tarde
        else if(horaexata >= 12 && horaexata < 18){
            alerta.innerHTML += `<br>Boa tarde!`
            imagem.src = "https://picsum.photos/id/1016/200/200"
            document.body.style.backgroundColor = "#FFBC80"
            document.body.style.color = "black"
            conteudo.style.backgroundColor = "#F76E11"
            conteudo.style.border = "none"
            }
            //noite
            else if(horaexata >= 18 && horaexata <=23){
                alerta.innerHTML += `<br>Boa noite!`
                imagem.src = "https://picsum.photos/id/1019/200/200"
                document.body.style.backgroundColor = "#524A4E"
                document.body.style.color = "white"
                conteudo.style.backgroundColor = "#1A1A40"
                conteudo.style.border = "none"
                }
                //madrugada
                else if(horaexata >= 0){
                alerta.innerHTML += `<br>Boa madrugada!` 
                document.body.style.backgroundColor = "#5a5658"
                document.body.style.color = "white"
                conteudo.style.backgroundColor = "#1A1A40"
                conteudo.style.border = "none"
                }
}