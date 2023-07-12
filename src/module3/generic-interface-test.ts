// // Generic interface

// interface CrushInterface<T, U = null>{
//     name: string,
//     husband: T;
//     wife ?: U
// }

// interface PersonInterface{
//     name: string,
//     age: number
// }

// const crush4 : CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'Kate Winslet',
//     husband: {
//         name: 'Persian',
//         age: 30
//     },
//     wife: {
//         name: 'winslet',
//         age: 40
//     }
// }

// const crush1: CrushInterface<boolean, string> = {
//     name: 'kate winslet',
//     husband: true,
//     wife: 'Kristian'
// } 

// const crush2: CrushInterface<string> ={
//     name: 'kate inslet',
//     husband: 'persian'
// }

// interface HusbandInterface{
//     name: string,
//     salary: number
// }

// const crush3 : CrushInterface<HusbandInterface> ={
//     name: 'kate windlet',
//     husband:{
//         name: 'persian',
//         salary: 10000
//     }
// }


// type GenericArray<T> = Array<T>;
// type GenericTupple<X, Y> = [X, Y];


// const rollNumbers: GenericArray<number> = [1,2, 3];
// const rollNumbers2: GenericArray<string> = ['1','2', '3'];
// const rollNumbers3: GenericArray<boolean>= [true, false];

// type userNameAndRollType = {
//     name: string,
//     roll: number
// }


// const userNameAndRollNumbers: GenericArray<userNameAndRollType> = [
//     {
//         name: 'John',
//         roll: 30
//     },
//     {
//         name: 'Salek',
//         roll: 90
//     }
// ]

// // type RelationWithSalaryType = {
// //     name: string,
// //     salary: number
// // }


// interface RelationWithSalaryInterface{
//     name: string, 
//     salary: number
// }

// const relationWithSalary: GenericTupple<RelationWithSalaryInterface, string> = [
//     {
//         name: 'Kabir',
//         salary: 200000
//     },
//     'dhaka'
// ]