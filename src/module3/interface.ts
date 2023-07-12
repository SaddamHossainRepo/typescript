// type User = {
//     name: string,
//     age: number
// }

// interface IUser{
//     name: string;
//     age: number;
// }

// const user: User  =  {
//     name: 'abir',
//     age: 20,
// }
// type ExtendedUser = User &{
//     role: string;
// }

// const extendedUSerWithTypeAlies: ExtendedUser = {
//     name: 'abir',
//     age: 30,
//     role: 'admin'
// }

// const userWithInterface : IUser = {
//     name: 'Interface user',
//     age: 20
// }

// interface IExtendedUser extends IUser{
//     role: string
// }

// const user1: IExtendedUser = {
//     name: 'ali',
//     age: 200,
//     role: 'admin'
// }


// // function

// type addNumbersType = (num1: number, num2: number) => number;

// const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

// // function with interface

// interface addNumbersWithInterface{
//     (num1: number, num2: number) : number;
// }

// const IAddNumbers: addNumbersWithInterface = (num1, num2) => num1 + num2;

// // array with type alies
// type numberArray = number[];
// const rollNumbers: numberArray = [1,2,3,4,5];

// // array with interface
// interface INumberArray {
//     [index:number] : string;
// }

// const IRollNumbers: INumberArray = ['1','2','3','4']