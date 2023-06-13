const heroObject:{
    name: string;
     readonly age: number;
     profession: string;
      isMarried ?: boolean //optional
    } = {
    name: 'Khan',
    age: 32,
    profession: 'Actor',
    isMarried: false
}

heroObject.profession = 'crickter';
console.log(heroObject);