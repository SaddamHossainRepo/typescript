// class Parent{
//     name: string;
//     age: number;
//     address: string

//     constructor(name: string, age: number, address: string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     makeSleep(hours: number): string{
//         return `this ${this.name} will sleep for ${hours}`;
//     }
// }


// class Student extends Parent{
//     constructor(name: string, age: number, address: string){
//         super(name, age, address);
//     }

//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours}`;

//     }
// }

// const student1 = new Student('Abir', 28, 'Dhaka');
// console.log(student1.makeSleep(8));