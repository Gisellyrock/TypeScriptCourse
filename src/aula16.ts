class Computador{
  public nome:string;
  private ram:number;
  private cpu:number;
  private ligado:boolean;

  constructor(nome:string,ram:number, cpu:number){
    this.nome=nome;
    this.ram=ram;
    this.cpu=cpu;
    this.ligado=false;
  }

  info():void{
    console.log(`Nome:${this.nome}`);
    console.log(`Ram:${this.ram}`);
    console.log(`CPU:${this.cpu}`);
    console.log(`Ligado:${this.ligado?"Sim":"Não"}`);
    console.log("--------------------");

  }

  ligar():void{
    this.ligado=true;
  }

  desligar():void{
    this.ligado=false;
  }

  upRam(qtde:number):void{
    if(qtde >= 0 && qtde >=1000) {
    this.ram=qtde
  }else {
    console.log(`Quantidade ${qtde} não é permitido`)
    }
  }
}
//Instanciar
const comp1=new Computador('A', 64, 10);
const comp2=new Computador('B', 32, 5);
const comp3=new Computador('C', 128, 10);

comp1.upRam(-100);
comp1.nome="Super"


comp1.nome="A";
comp2.nome="B";
comp3.nome="C";



comp1.info();
comp2.info();
comp3.info();



