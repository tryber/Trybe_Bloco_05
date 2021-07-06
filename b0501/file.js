//Part I and II

// Para entender como você pode fazer isso, vamos entender a função getElementById .

let paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";
paragraph = document.getElementById("paragraph").innerText = "Album: it's so easy"; 

// 1-Recupere o elemento que contém o título da página e faça algo com ele, como 
// alterá-lo para o nome do seu filme favorito.
const paragraph2 = document.
getElementById("page-title").innerText = "Sweet child of mine,1988";

// 2-Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

// Por fim, recupere o subtítulo e altere-o também.
const subTitle = document.
getElementById("subtitle").innerText = "Guns and 'Trybers'";


const secondParagraph = document.
getElementById("second-paragraph").innerText = "Sweet child of mine";

// Utilizando o mesmo template de exercício anterior:
// 1-Adicione uma classe igual para os dois parágrafos.
// 2-Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
// 3-Altere algum estilo do primeiro deles.
document.getElementsByClassName("paragraph")[0].innerText = paragraph + "! Oh My Gosh!";

// 4-Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
document.getElementsByTagName("h4")[0].innerText = subTitle + " Oh yes!"
