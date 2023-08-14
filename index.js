const fruits = [
    {cliente: "Viradao",status:"Aberto"},
    {cliente: "PetMaster",status:"Concluido"},
    {cliente: "Emporio",status:"Em andamento"},
    {cliente: "Viradao",status:"Concluido"},
    {cliente: "Viradao",status:"Em andamento"},
    {cliente: "PetMaster",status:"Aberto"},
    {cliente: "Emporio",status:"Aberto"},

];
let situacao = 'Aberto';
let nome = 'PetMaster';

function getChamadosEmAberto(chamados,situacao,cliente){
    for(let chamado of chamados){
        if(chamado.status === situacao && chamado.cliente === cliente){
            return chamado
            
        }else{
            return 0
        }
    }
}


console.log(getChamadosEmAberto(fruits,situacao));

