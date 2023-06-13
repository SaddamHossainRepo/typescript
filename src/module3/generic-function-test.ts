// // arrow function
// const createArray = (param: string): string[] =>{
//     return [param];
// }
// const createArray1 = <T>(param: T): T[] =>{
//     return [param];
// }
// const createArray2 = <X,Y>(param1: X, param2:Y): [X,Y] =>{
//     return [param1, param2];
// }

// const result = createArray2<string, string>('bangladesg', 'I love my country');
// const result2 = createArray2<boolean, string[]>(true, ['USA']);

// type Name = {name: string};

// const result3 = createArray1<Name>({name:'bangladesh'});

// // spread operator
// const myInfo = {
//     name: 'Persian',
//     age: 100,
//     salary: 100000000
// }
// // const newData = {...myInfo, crush}
// const addMeInMyCrushMind = <T>(myInfo: T) =>{
//     const crush = 'Kate Winslet';
//     const newData = {...myInfo, crush};
//     return newData;
// }

// const result5 = addMeInMyCrushMind(myInfo);

// result5