const salarioGerente = 21000.00
const salarioAnalista = 11000.00
const salarioDesenvolvedor = 9500.00
const salarioDba = 10500.00

function pegarIdade(datanascimento) {
    let hoje = new Date();
    let aniversario = new Date(datanascimento);
    let idade = hoje.getFullYear() - aniversario.getFullYear();
    let meses = hoje.getMonth() - aniversario.getMonth();
    if (meses < 0 || (meses === 0 && hoje.getDate() < aniversario.getDate())) {
        idade--;
    }
    return idade;
}

function porcentagem(numero, porcentagem){
  return (numero/100)*porcentagem;
}

function seForMenorIdade(datanascimento){
    return pegarIdade(datanascimento) < 18
}

function seTiverNomeSobreNome(nome){
    if(nome){
        let nomes = nome.split(" ")
        return nomes.length >= 2
    }
    return false
}

//function literal
function setarSalarioConformeCargo(cargo){
    if(!cargo || document.getElementById("salario").value)
        return;

    switch(cargo){
        case 'gerente':
            //setar valor no campo salario 21000,00
            document.getElementById("salario").value = salarioGerente
            document.getElementById("total-salario").value = salarioGerente + porcentagem(salarioGerente, 10)
            return;
        case 'analista':
            //setar valor no campo salario  11000,00;
            document.getElementById("salario").value = salarioAnalista
            document.getElementById("total-salario").value = salarioAnalista + porcentagem(salarioAnalista, 5)
            return;
        case 'desenvolvedor':
            //setar valor no campo salario 9500,00;
            document.getElementById("salario").value = salarioDesenvolvedor
            document.getElementById("total-salario").value = salarioDesenvolvedor
            return;
        case 'dba':
            //setar valor no campo salario 10500,00
            document.getElementById("salario").value = salarioDba
            document.getElementById("total-salario").value = salarioDba
            return;
    }
}

function validarFormulario(){
    if(!seTiverNomeSobreNome(document.getElementById("nome").value)){
       alert("O campo deve ter no mínimo o nome, segundo nome e/ou sobrenome")
       alert("Não foi possível cadastrar esse funcionário!")
       return;
    }
 
    if(seForMenorIdade(document.getElementById("datanascimento").value)){
       alert("O funcionário deve ser maior de idade para o cadastro!")
       alert("Não foi possível cadastrar esse funcionário!")
       return;
    }
 
    alert("Funcionario Cadastrado")
    console.log("Funcionario Cadastrado", new Funcionario(
        document.getElementById("nome").value, 
        document.getElementById("email").value, 
        document.getElementById("datanascimento").value, 
        document.getElementById("salario").value, 
        document.getElementById("cargo").value, 
        document.getElementById("total-salario").value, 
    ))
    //faria um request e mandaria via post as informacoes do funcionario para a api
}
 