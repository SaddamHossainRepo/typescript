// type AlphaNumeric = string|number;

// // key of guard
// function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric{
//     if(typeof param1 == 'number' && typeof param2 =='number'){
//         return param1 + param2;
//     }
//     else{
//         return param1.toString() + param2.toString();
//     }
// }

// add('1', '2');
// add(1,2);

// // in guard
// type NormalUserType = {
//     name: string;
// }

// type AdminUserType = {
//     name: string;
//     role: 'admin';
// }

// function getUser(user: NormalUserType| AdminUserType): string{
//     if('role' in user){
//         return `I am an admin and my role is ${user.role}`;
//     }
//     else{
//         return `I am a normal user`;
//     }
// }

// const normalUser1 : NormalUserType = {name: 'Mr. Kalu'};
// const adminUser1 : AdminUserType = {name: 'Mr. Galu', role: 'admin'};


// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// // instance of guard

// class Animal{
//     name: string;
//     species: string;

//     constructor(name: string, species: string){
//         this.name = name;
//         this.species = species;
//     }

//     makeSound(){
//         console.log('I am making sound');
//     }
// }

// class Dog extends Animal{
//     constructor(name:string, species: string){
//         super(name, species);
//     }
//     makeBark(){
//         console.log('I am barking');
//     }
// }


// class Cat extends Animal{
//     constructor(name:string, species: string){
//         super(name, species);
//     }
//     makeMew(){
//         console.log('I am mewing');
//     }
// }

// function isDog(animal: Animal): animal is Dog{
//     return animal instanceof Dog;
// }

// function isCat(animal: Animal): animal is Cat{
//     return animal instanceof Cat;
// }
// // this function will get instance of dog or cat
// function getAnimal(animal: Animal){
//     if(isDog(animal)){
//         animal.makeBark();
//     }
//     else if(isCat(animal)){
//         animal.makeMew();
//     }
//     else{
//         animal.makeSound();
//     }
// }

// const animal1 = new Dog('Tom', 'Dog');
// const animal2 = new Cat('Mini', 'Cat');

// getAnimal(animal1);
// getAnimal(animal2);