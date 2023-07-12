interface CrushInterface<T, U = null>{
    name: string;
    husband: T;
    wife ?: U;
}

interface PersonInterface{
    name: string;
    age: number;
}

const crush3 : CrushInterface<string, string> = {
    name: 'Chris John',
    husband: 'Persian',
    wife : 'Priyanka Chopra'
}

const crush4 : CrushInterface<PersonInterface, PersonInterface> = {
    name: 'Kate Winslet',
    husband: {
        name: 'John',
        age: 20
    },
    wife : {
        name: 'Rose',
        age: 40
    }
}