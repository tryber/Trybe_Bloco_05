// 1-Acesse o elemento elementoOndeVoceEsta e 
// 2-Acesse pai a partir de elementoOndeVoceEsta e 
// adicione uma color a ele.

let colorPai = document.querySelector
    ("#elementoOndeVoceEsta").parentElement
colorPai.style.color = "green"

//  3-Acesse o primeiroFilhoDoFilho e adicione um 
//  texto a ele. Você se lembra
//  dos vídeos da aula anterior, como fazer isso?
document.querySelector
("#primeiroFilhoDoFilho").innerHTML = "juka"

// 4-Acesse o primeiroFilho a partir de pai .
document.querySelector
("#pai").children[0]

// 5-Agora acesse o primeiroFilho a partir de
//  elementoOndeVoceEsta .
document.querySelector
("#elementoOndeVoceEsta").previousSibling.previousSibling

// 6-Agora acesse o texto Atenção! a partir de 
// elementoOndeVoceEsta .
document.querySelector
    ("#elementoOndeVoceEsta").nextSibling
// // 7-Agora acesse o terceiroFilho a partir de
//  elementoOndeVoceEsta .
document.querySelector
    ("#elementoOndeVoceEsta").nextElementSibling 

// 8-Agora acesse o terceiroFilho a partir de pai .
document.querySelector
    ("#pai").childNodes[5]