// // generic interface

// interface CrushInterface<T, U=undefined>{
//     name: string;
//     husband: T;
//     wife?: U
// }

// const crush1 : CrushInterface<number> = {name: 'pori moni', husband: 67};
// const crush2 : CrushInterface<string> = {
//     name: 'Kate winslet',
//     husband: "persian"
// }

// type curshHusbandType ={
//     name: string,
//     salary: number
// }

// interface HusbandInterface{
//     name: string,
//     salary: number
// }
// const crush3 : CrushInterface<HusbandInterface> = {
//     name: 'Alexandra daadrio',
//     husband:{
//         name: "Rock",
//         salary: 100000
//     }
// }

// type GenericTupple<X,Y> = [X,Y]

// const relation:GenericTupple<string,string> = ['Saddam', 'Empty']

// const relationWithSalary: GenericTupple<object, string>=[{
//     name: 'persion',
//     salary: 100000000000000
// },
//     'kate winslet',
// ] 

// type GenericArray<T> = Array<T>


// const rollNumber: GenericArray<number> = [12,44, 56];
// const rollNumbers2: GenericArray<string>= ['23', '55', '77'];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType =  {name:string, roll:number}


// const userNameAndRollNumbers: GenericArray<NameRollType> = [{
//     name: 'Mr. X',
//     roll: 12
// },
// {
//     name: 'Mr. Y',
//     roll: 14
// }];