const student = {

    id: 101,
    money: 5000,
    name:'anana',
    subjects: ['english', 'bangla', 'eco101', 'calculus'],
    bestFriend:{
        name: 'kunsu',
        major: 'math'
    },
    takeExam: function(name){
        console.log(this.name, 'take exam');
    },
    treatDay: function(expense){
        this.money = this.money - expense;
        return this.money;
    }
}

const remaining = student.treatDay(900);
console.log(remaining)