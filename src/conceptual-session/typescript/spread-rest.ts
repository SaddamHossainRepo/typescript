// spread operator
const heroArray1: string[] = ['khan', 'jalil', 'siam'];
const heroArray2: string[] = ['Alom', 'faruk', 'razzak'];

heroArray1.push(...heroArray2);
// console.log(...heroArray1);

// Rest parameter
const heroScore = (...score: number[] ): number =>{
    let sum : number = 0;
    score.map(number => {
        sum = sum + number;
    })
    return sum;
}

console.log(heroScore(1,23,45,23,56));