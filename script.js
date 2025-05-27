let imagem = document.getElementById("troca-imagem")

function trocaImagem(){
    imagem.style.opacity = 0
}

setInterval(() => {
    trocaImagem()
}, 3000)