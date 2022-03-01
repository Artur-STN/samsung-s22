function hoverImg(modo, srcImg) {

    if (modo == 'entrou') {
        
        document.getElementById(srcImg).classList.remove('saiu')
        document.getElementById(srcImg).classList.add('entrou')

    } else if (modo == 'saiu') {
        
        document.getElementById(srcImg).classList.remove('entrou')
        document.getElementById(srcImg).classList.add('saiu')

    }
    
}