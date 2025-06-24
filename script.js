const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
   const texto= document.querySelector('#entrada-de-texto').valeu;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavras  = processaTexto (texto);

   campoResultado.textContent = palavrasChave.join(","); 
 }
console.log(frequencias);
return palavras;
}
function contaFrequencias(palavras){
    
}
function processaTexto(texto){
   let palavras = texto.split(/\P{L}+/l);
   contaFrequencias(palavras);
   let frequencias = {;
   for(let i of  palavras){
       frequencias [i] =0;
       for (let j of  palavras)
           if (i==j){
               frequencias[i]++;
           }
       }
   }