///chamando as divs top bottom middle aside e nav

var divTop = document.getElementById("top") // div do topo
var divMiddle = document.getElementById("middle") // div do meio
var divBottom = document.getElementById("bottom") // div de baixo
var divAside = document.getElementById("aside") // div da esquerda
var UlAbas = document.getElementById("nav") // div do menu
var brline = document.createElement("br")//crei um br
var brline2 = document.createElement("br")// criei outro
var fundo = document.body; // peguei o body da pagina

//adicionei uns br na div o meio p melhor visualização
divMiddle.appendChild(brline)
divMiddle.appendChild(brline2)

//nome auto explicativo né kjjjj personaliza a div de cima
function AlteraTop(){
	//get
	let cor = document.getElementById('cortopo') //peguei o input q seleciona cor
	let textTop = document.getElementById('titulo').value //pego O titulo para a div de cima

	//post
	let ftext = document.createTextNode(textTop) //transformo o titulo em texto NODE
	let h1 = document.createElement('h1') //crio um h1

	h1.appendChild(ftext)//ponho o titulo NODE no h1
	divTop.appendChild(h1)//pego o H1 e coloco na div de cima
	divTop.style.backgroundColor = cor.value;

	//mesma explicação para AlteraBottom() e AlteraAside()
}

//nome auto explicativo né kjjjj personaliza a div de baixo 
function AlteraBottom(){
	let cor = document.getElementById('corbottom')
	let textBottom = document.getElementById('bottomtext').value
	let ftext = document.createTextNode(textBottom)
	let h1 = document.createElement('h1')
	h1.appendChild(ftext)
	divBottom.appendChild(h1)
	divBottom.style.backgroundColor = cor.value;
}

//nome auto explicativo né kjjjj personaliza a div da esquerda
function AlteraAside(){
	let cor = document.getElementById('coraside')
	let textAside = document.getElementById('asidetext').value
	let ftext = document.createTextNode(textAside)
	let h1 = document.createElement('h1')
	h1.appendChild(ftext)
	divAside.appendChild(h1)
	divAside.style.backgroundColor = cor.value;
}



//Tudo acima ta funcionando o problema é o menu horizontal, a partir daqui
//O que eu chamo de aba => "cada botão q leva para uma pagina/rota diferente do menu ex: Home | projetos | contatos | sobre"

function configaba(){//utilizado pelo input number com placeholder "Nº de abas"
	
	//texto da aba
	let input = document.createElement('input')//crio um input pra receber o texto da aba
	input.setAttribute('type','text')//defino tipo como texto
	input.setAttribute('class','new_aba')//defino classe como new_aba
	input.setAttribute('placeholder','nome da aba')//placeholder para o usuario

	//link da aba
	let inputLink = document.createElement('input')//crio input
	inputLink.setAttribute('type','text')//defino tipo como texto poderia ser link tbm
	inputLink.setAttribute('class','thelink')//defino a classe como thelink
	inputLink.setAttribute('placeholder','link')//placeholder para o usuario
	
	divMiddle.appendChild(input)//adiciono o input do texto lá no formulario
	divMiddle.appendChild(inputLink)//adicionoo input do link lá no formulario
	divMiddle.appendChild(brline)//br pra formatar mió
}


function addAba(){//utilizado pelo button "criar abas"
	let aba = document.createElement('li')//cria um novo ItemList/aba
	let linkaba = document.createElement('a')//link di ItemList

	let textaba = document.getElementsByClassName('new_aba').value // tento pegar o texto que o usuario escreveu na função de cima
	let textlink = document.getElementsByClassName('thelink').value // tento pegar o link que o usuario escreveu na funcão de cima

	linkaba.setAttribute('href', document.createTextNode(textlink)) //paragrafo abaixo
	/* atribuo o link no href do link(linha 82), é aqui que está um erro!
	 ao invés do link informado pelo usuario lá aparece como [Object text]
	 tentei até aquele .textContent q tu me ensinou mas nao funcionou*/
	
	linkaba.appendChild(document.createTextNode(textaba))// o outro erro é este, ao invés do texto informado pelo usuario, lá aparece "undefined"
	aba.appendChild(linkaba)//aqui eu adiciono o <a href> no <li>, ou melhor atribuo o link da aba

	UlAbas.appendChild(aba)//aqui é adicionei o <li a> criado no <nav> para melhor organização
	
	console.log(textaba)//tava testando o que aparecia no caso undefinded
	console.log(textlink)// no caso undefined tbm, mas em um codigo antigo aparecia "HTML collection, q por sinal ja vi uma vez estuando OO ou ES6 eu acho"
}

function CorFundo(){//altera a cor do fundo
	let cor = document.getElementById('backcolor').value//seleciono no seletor a cor
	fundo.style.backgroundColor = cor; // adicono no fundo
}