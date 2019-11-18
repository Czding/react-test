class Person {
    constructor() {
        this.name = 'ding';
        this.age = 24;
        this.sex = 'boy';
    }
    info() {
        console.log('info');
        this.name = 'Ding';
        return `姓名：${this.name}`;
    }
    food() {
        return 'apple';
    }
    eat() {
        const food = this.food();
        console.log(`${this.name}吃${food}`);
    }
    static getInfo() {
        console.log('success');
    }
}
Person.getInfo();

class People extends Person {
    constructor() {
        super();
        this.high = 100;
    }
    init() {
        console.log('init')
    }
}

export default new People();