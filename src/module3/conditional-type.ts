// a type is dependent on another type

type a1 = null;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;
// nested conditonal type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;


type Sheikh = {
    wife1: string;
    wife2: string;

}

// check korbe ai sheikh e wife1 ase kina ? true : false

type checkProperty <T>= T extends {wife2 : string} ? true: false;

type checkWife2 = checkProperty<Sheikh>;