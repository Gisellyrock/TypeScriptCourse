let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor=10;

nvalor=<number>uvalor;
svalor=<string>uvalor;

console.log(typeof(uvalor));
console.log(uvalor);
console.log(nvalor);


