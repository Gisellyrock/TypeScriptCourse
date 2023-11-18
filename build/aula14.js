"use strict";
const teste = (txt) => {
    console.log(txt);
};
teste("Giselly na Serasa");
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30];
console.log(fsoma2(numer));
