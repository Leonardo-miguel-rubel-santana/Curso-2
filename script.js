const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
   const texto= document.querySelector('#entrada-de-texto').valeu;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavras  = processaTexto (texto);

   campoResultado.textContent = palavrasChave.join(","); 
 
}

function processaTexto(texto) {
   let palavras = texto.split(/\P{L}+/l); 
   const frequencias =contaFrequencias (palavras);
   let ordenadas  = Object.keys(frequencias).sort(ordenaPalavra);

   function ordenaPalavra(p1,p2){
    return frequencias [p2] - frequencias[p1];
   }               

console.log(ordenadas);
return ordenadas.slice(0,10);
}

   Function contaFrequencias(palavras) {
   let frequencias = {};
   for(let i of  palavras){
       frequencias [i] = 0;
       for (let j of  palavras){
           if (i==j){
               frequencias[i]++;
           }
       }
    }
}
