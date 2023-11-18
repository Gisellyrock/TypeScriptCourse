const teste=(txt:string):void=>{
  console.log(txt);
}


teste("Giselly na Serasa");

// function teste():void{
//   console.log("Teste");
// }



const fsoma2=(n:number[]):number=>{
  let s:number=0;
  n.forEach((e)=>{
    s+=e;
  })
  return s;
}

let numer:number[]=[10, 20, 30];
console.log(fsoma2(numer))