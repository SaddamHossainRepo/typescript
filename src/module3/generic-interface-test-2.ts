// // generic interface

// interface CrushInterface<T, U = null>{
//     name:string,
//     husband: T,
//     wife ?: U
// }

// const crush1 : CrushInterface<boolean> = {
//     name: 'Kate Winslet',
//     husband: true
// }

// const crush2 : CrushInterface<string> = {
//     name: 'deepika',
//     husband: 'Salman Khan'
// }

// interface HusbandInterface {
//     name: string,
//     salary: number
// }

// const crush3 : CrushInterface<HusbandInterface> ={
//     name: 'kate Winslet',
//     husband: {
//         name: 'Persian',
//         salary: 10000000000
//     }
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
//         name: 'Katrina',
//         age: 23
//     }
// }