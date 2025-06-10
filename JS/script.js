let equipamentos = [];

function AddEquipamento(){
    equipamento = {
        "codigo": document.getElementById("codigo").value,
        "nome": document.getElementById("nome").value,
        "preco": document.getElementById("preco").value
    }
    equipamentos.push(equipamento);
    LimparCampos();
}

function ViewEquipamento(){
    console.log(equipamentos);
}

function LimparCampos(){
    document.getElementById("codigo").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";   
}

function ViewName(){
    for(let i = 0; i < equipamentos.length; i++){
        console.log(equipamentos[i].nome);
    }
}

function UpdatePrecos(){
    for(let i = 0; i < equipamentos.length; i++){
        equipamentos[i].preco = "3000";
    }
}