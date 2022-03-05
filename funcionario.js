class Funcionario {
    constructor(nome, email, datanascimento, salario, cargo, totalsalario){
        this.nome = nome
        this.email = email
        this.datanascimento = datanascimento
        this.salario = salario        
        this.cargo = cargo
        this.totalsalario = totalsalario
    }

    get pegarNome(){
        return this.nome
    }
    set setarNome(nome){
        return this.nome = nome
    }

    get pegarEmail(){
        return this.email
    }
    set setarEmail(email){
        return this.email = email
    }

    get pegarDataNascimento(){
        return this.datanascimento
    }
    set setarDataNascimento(datanascimento){
        return this.datanascimento = datanascimento
    }

    get pegarSalario(){
        return this.salario
    }
    set setarSalario(salario){
        return this.salario = salario
    }

    get pegarCargo(){
        return this.cargo
    }
    set setarCargo(cargo){
        return this.cargo = cargo
    }

    get pegarTotalSalario(){
        return this.totalsalario
    }
    set setarTotalSalario(totalsalario){
        return this.totalsalario = totalsalario
    }
}