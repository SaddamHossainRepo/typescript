// class Parent{
//     name: string;
//     age: number;
//     address: string;

//     constructor( name: string,  age: number,  address: string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//      }

//      makeSleep(hours: number): string{
//         return `This ${this.name} will sleep for ${hours}`;
//      }
// }

// class Student extends Parent{
//      constructor( name: string,  age: number,  address: string){
//         super(name, age, address);
//      }

//     //  makeSleep(hours: number): string{
//     //     return `This ${this.name} will sleep for ${hours}`;
//     //  }
// }

// const student1 = new Student('Mr. X', 12, 'Uganda');


// class Teacher{
//     name: string;
//     age: number;
//     address: string;
//     designation: string;

//     constructor(name: string, age: number, address: string, designation: string){
//         this.name = name;
//         this.address = address;
//         this.age = age;
//         this.designation = designation;
//     }

//     makeSleep(hours: number): string{
//         return `This ${this.name} will sleep for ${hours}`;
//      }

//      takeClasses(numberOfClass: number){
//         console.log(` ${this.name} will take ${numberOfClass} classes`);
//      }
// }

// const teacher1 = new Teacher('Mr. Y', 32, 'bagerhat', 'Professor');
// teacher1.takeClasses(4);