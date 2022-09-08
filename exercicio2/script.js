/*# Exercício 2

Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. 
No arquivo `script,js` existe uma versão do código já escrita, mas você pode colar o exercício que 
você fez na última prática!

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}
*/


let nacionalidade = prompt(`Digite aqui a nacionalidade:
-brasileira
-argentina
-uruguaia
-chilena
-colombia`).toLowerCase()

console.log("Nacionalidade informada: ", nacionalidade)


switch (nacionalidade) {
    case "brasileira":
        console.log("País da nacionalidade",nacionalidade ,"é Brasil")
        break;
    case "argentina":
        console.log("País da nacionalidade",nacionalidade ,"é Argentina")
        break;
    case "uruguaia":
        console.log("País da nacionalidade",nacionalidade ," é Uruguai")
        break;
    case "chilena":
        console.log("País da nacionalidade",nacionalidade ," é Chile")
        break;
    case "colombia":
        console.log("País da nacionalidade",nacionalidade ," é Colombia")
        break;
    default:
        console.log("A nacionalidade informada não consta em nosso cadastro")

}


/*
if(nacionalidade === "brasileira"){

  console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}


const nacionalidadePais = {
    brasileira: "Brasil",
    argentina: "Argentiona",
    uruguaia: "Uruguaia",
    chilena: "Chile",
    colombiana: "Colômbia"

*/
