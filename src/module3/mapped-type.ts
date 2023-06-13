const arrayOfNumbers = [1,2,3] //['1','2','3']
const arrayOfStrings = arrayOfNumbers.map((number) =>number.toString());
console.log(arrayOfStrings);


type AreaNumber ={
    height: number ;
    width: number
}

type AreaString ={
    height: string;
    width: string;
}

const rectangularArea: AreaNumber = {
    height: 10,
    width:12
}

rectangularArea.height

type A = AreaNumber['height'] //look up types
type B = keyof AreaNumber; // 'height' | 'width'

// const obj={
//     name: 'saddam'
// }
// obj['name'];