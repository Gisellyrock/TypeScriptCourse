function soma(n1:number, n2:number):number{
  return n1 + n2;
}

console.log(soma(5,5));

function novoUser(user: string, pass: string, nome?: string): void {
  console.log(`User: ${user}`);
  console.log(`Pass: ${pass}`);
  console.log(`Nome: ${nome}`);
}

novoUser('br', '123');
