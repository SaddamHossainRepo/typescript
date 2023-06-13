function heroFunc(a: number, b: number): number{
    const sum = a+b;
    return sum;
}

console.log(heroFunc(12, 30));

// arrow function
const heroArrowFunc = (c: number, d: number, e: number):  string =>{
    return`Total : ${c+ d + e}`;

}

console.log(heroArrowFunc(13, 20, 4));