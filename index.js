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


function getChamadosEmAberto(chamados,situacao){
    for(let chamado of chamados){
        if(chamado.status === situacao){
            return chamado
            
        }else{
            return null
        }
    }
}


console.log(getChamadosEmAberto(fruits,situacao));

