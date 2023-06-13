type NoobDeveloper = {
    name: String;
};

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

const newDeveloper: NoobDeveloper | JuniorDeveloper ={
    name: 'Mojnu Mia',
    expertise: 'JavaScript',
    experience: 6
}
