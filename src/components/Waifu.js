class Waifu {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    get waifuName() {
        return this.name;
    }
    get waifuAge() {
        return this.age;
    }
    get waifuHeight() {
        return this.height;
    }
    set waifuName(name) {
        this.name = name;
    }
    set waifuAge(age) {
        this.age = age;
    }
    set waifuHeight(height) {
        this.height = height;
    }
}

export default Waifu;