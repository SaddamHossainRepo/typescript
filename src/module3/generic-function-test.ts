// Arrow function
const createArray = (param: string): string[] =>{
    return [param];
}
const createArray1 = <X, Y>(param1: X, param2: Y): [X,Y] =>{
    return [param1, param2];
}

type Name = {name: string}

const result1 = createArray1<string, string>('Bangladesh', 'I love my country');
const result2 = createArray1<boolean, Array<string>>(true, ['usa']);
const result3 = createArray1<Name, {age: number}>({name: 'abir'}, {age: 20});