class Conta{
protected numero:number
protected titular:string
  constructor(titular:string){
      this.numero=this.gerarNumeroConta()
      this.titular=titular
  }
  private gerarNumeroConta():number{
    return Math.floor(Math.random()*10000)+1;
  }
  info(){
    console.log(`Titular:${this.titular}`)
    console.log(`Número:${this.numero}`)
    console.log(`-----------------------`)

  }
}

class ContaPF extends Conta{
  cpf:number
  constructor(cpf:number, titular:string){
    super(titular)
    this.cpf=cpf
    console.log(`Conta PF criada:${titular}`)
  }
}

class ContaPJ extends Conta{
  cnpj:number
  constructor(cnpj:number, titular:string){
    super(titular)
    this.cnpj=cnpj
    console.log(`Conta PJ criada:${titular}`)
  }
}


const cont1=new ContaPF(111, "Gi")
const cont2=new ContaPJ(122, "Gio")



cont1.info()