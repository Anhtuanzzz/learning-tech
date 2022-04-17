class Waifu {
    constructor(name, age, height) {
        this._name = name;
        this._age = age;
        this._height = height;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get height() {
        return this._height;
    }
    set name(name) {
        this._name = name;
    }
    set age(age) {
        this._age = age;
    }
    set height(height) {
        this._height = height;
    }
    calcBirthYear() {
        let year = new Date().getFullYear();
        return year - this._age;
    }
}

export default Waifu;