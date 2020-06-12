var divTop = document.getElementById("top")
var divMiddle = document.getElementById("middle")
var divBottom = document.getElementById("bottom")
var divAside = document.getElementById("aside")
var UlAbas = document.getElementById("nav")
var brline = document.createElement("br")
var brline2 = document.createElement("br")
var fundo = document.body;
divMiddle.appendChild(brline)
divMiddle.appendChild(brline2)

function AlteraTop(){
	let cor = document.getElementById('cortopo')
	let textTop = document.getElementById('titulo').value
	let ftext = document.createTextNode(textTop)
	let h1 = document.createElement('h1')
	h1.appendChild(ftext)
	divTop.appendChild(h1)
	divTop.style.backgroundColor = cor.value;
}

function AlteraBottom(){
	let cor = document.getElementById('corbottom')
	let textBottom = document.getElementById('bottomtext').value
	let ftext = document.createTextNode(textBottom)
	let h1 = document.createElement('h1')
	h1.appendChild(ftext)
	divBottom.appendChild(h1)
	divBottom.style.backgroundColor = cor.value;
}

function AlteraAside(){
	let cor = document.getElementById('coraside')
	let textAside = document.getElementById('asidetext').value
	let ftext = document.createTextNode(textAside)
	let h1 = document.createElement('h1')
	h1.appendChild(ftext)
	divAside.appendChild(h1)
	divAside.style.backgroundColor = cor.value;
}

//onmousedown //oninput
function addAba(){
	let aba = document.createElement('li')
	let linkaba = document.createElement('a')

	let pos = Math.ceil(Math.random() * 10)
	if (pos < 3){
		linkaba.value = 'www.instagram.com'
		linkaba.setAttribute('href', linkaba.value)
		linkaba.appendChild(document.createTextNode('instagram'))
		
	}else if(pos > 3 && pos < 7){
		linkaba.value = 'www.google.com'
		linkaba.setAttribute('href', linkaba.value)
		linkaba.appendChild(document.createTextNode('google'))
		
	}else{
		linkaba.value = 'www.youtube.com'
		linkaba.setAttribute('href', linkaba.value)
		linkaba.appendChild(document.createTextNode('youtube'))
		
	}
	
	
	aba.appendChild(linkaba)

	UlAbas.appendChild(aba)
	
}

function CorFundo(){
	let cor = document.getElementById('backcolor').value
	fundo.style.backgroundColor = cor;
}
