let container = document.querySelector(".container");
let texto = document.querySelector(".texto");

let data = new Date();
let dataObj = {
    diaDaSemana: data.getDay(),
    dia: data.getDate(),
    mes: data.getMonth(),
    ano: data.getFullYear(),
    hora: data.getHours(),
    minuto: data.getMinutes(),
    segundos: data.getSeconds(),
}
let diasSemanaArray = [`Domingo`,`Segunda-feira`,`Terça-feira`,`Quarta-feira`,`Quinta-feira`,`Sexta-feira`,`Sábado`]

let mesesDoAno = [`Janeiro`,`Fevereiro`,`Março`,`Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`];

texto.innerHTML += `${diasSemanaArray[dataObj.diaDaSemana]} ${dataObj.dia} ${mesesDoAno[dataObj.mes]} de ${dataObj.ano} <br> Horário: ${dataObj.hora}:${dataObj.minuto}:${dataObj.segundos}`
