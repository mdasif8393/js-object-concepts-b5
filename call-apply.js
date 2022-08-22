const kibria = {
    id: 101,
    money: 5000,
    name:'Rj KIBRIA',
    major: 'math',
    treatDay: function(expense){
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}

// kibria.treatDay(100);

const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal Golam',
}
kibria.treatDay(100);
const heroTreatDey = kibria.treatDay.bind(heroBalam);
// heroTreatDey(500);

kibria.treatDay(400);
const normalTreatDey = kibria.treatDay.bind(normalGolam);
// normalTreatDey(500);

// kibria.treatDay.call(heroBalam, 500);
kibria.treatDay.apply(heroBalam,[300]);