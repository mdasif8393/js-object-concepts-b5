const student = {name: 'sakib', id: 1, job:"cricket"}
//constructure way
const person = new Object();
console.log(person);

//3 inheritance way
const human1 = Object.create(null);
const human = Object.create(student);
console.log(student.job);

//4.using class
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const peop = new People('Manush', 12);
console.log(peop);

//5. using function
function Manush(name){
    this.name = name;
}
const man = new Manush('kader');
console.log(kader)