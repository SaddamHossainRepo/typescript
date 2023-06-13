// type User = {
//     name: string;
//     age: number;
// }

// type extendedUser = User & {
//     role: string
// }

// interface IUser{
//     name: string;
//     age: number;
// }

// interface IExtendedUser extends IUser{
//     role: string
// }

// const user: extendedUser = {
//     name: 'kabul',
//     age: 200,
//     role: 'unknown'
// }


// const userWithTypeAlis: User = {
//     name: 'Abul',
//     age: 20
// }

// const userWithInterface: IUser ={
//     name: 'interface',
//     age: 200
// }


// type RollNumberType = number[];
// interface IRollNumbers{
//     [index:number]:number
// }
// const rollNumbers: IRollNumbers = [1,3,5];


// type AddNumbers = (num1: number, num2: number) => number; 

// const addNumber: IAddNumbers = (num1, num2) => num1+ num2;

// interface IAddNumbers{
//     (num1: number, num2: number): number
// }