class Animal {
    get species() {
        return this._species;
    }

    set species(value) {
        if (value != null && value.trim() !== "") {
            this._species = value;
        } else {
            console.log("Некорректное значение!");
        }
    }

    get color() {
        return this._color;
    }

    set color(value) {
        if (value != null && value.trim() !== "") {
            this._color = value;
        } else {
            console.log("Некорректное значение!");
        }
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        if (parseInt(value) > 0 && value != null && value.trim() !== "") {
            this._weight = value;
        } else {
            console.log("Некорректное значение!");
        }
    }

    get placeOfPoop() {
        return this._placeOfPoop;
    }

    set placeOfPoop(value) {
        if (value != null && value.trim() !== "") {
            this._placeOfPoop = value;
        } else {
            console.log("Некорректное значение!");
        }
    }

    constructor(species, color, weight) {
        this.species = species;
        this.color = color;
        this.weight = weight;
    }
}

class Pet extends Animal {
    get name() {
        return this._name;
    }

    set name(value) {
        if (value != null && value.trim() !== "") {
            this._name = value;
        } else {
            console.log("Некорректное значение!");
        }
    }

    constructor(name, species, color, weight) {
        super(species, color, weight);
        this.name = name;
    }

    getInfo() {
        console.log("Имя:", this.name + ", Порода:", this._species + ", Окрас:", this._color + ", Вес:", this.weight + " кг");
    }

    doPoop() {
        console.log(this.name + " какает " + this.placeOfPoop);
    }
}

class Cat extends Pet {
    placeOfPoop = "в лоток";

    voice() {
        console.log(this.name + " говорит - мяу");
    }

    constructor(name, species, color, weight) {
        super(name, species, color, weight);
        super.placeOfPoop = this.placeOfPoop;
    }
}

class Dog extends Pet {
    placeOfPoop = "на улице";

    voice() {
        console.log(this.name + " говорит - гав");
    }

    constructor(name, species, color, weight) {
        super(name, species, color, weight);
        super.placeOfPoop = this.placeOfPoop;
    }
}

class GuideDog extends Dog {
    helpToOwner() {
        console.log("Помогает слепому хозяину");
    }
}

class PetShop {
    get pets() {
        return this._pets;
    }

    set pets(value) {
        if (value != null && value[0] instanceof Pet) {
            this._pets = value;
        } else {
            alert("Некорректное значение!");
        }
    }

    constructor(pets) {
        this.pets = pets;
    }

    petFoundHisHome(pet) {
        if (this._pets.find(e => e === pet)) {
            console.log(`${pet.name} поедет домой!`)
            const indexOFHappyPet = this._pets.indexOf(pet);
            if (indexOFHappyPet > -1)
                this._pets.splice(indexOFHappyPet, 1)
        } else {
            console.log(`${pet.name} уже дома!`)
        }
    }
}

let murzik = new Cat("Мурзик", "Персидский кот", "Рыжий", "4,5");
murzik.getInfo();
murzik.weight = "5 кг";
murzik.getInfo();
console.log(murzik);
murzik.voice();
murzik.doPoop();

let vasya = new Cat("Вася", "Маскарадный кот", "Серый", "3,5");
vasya.getInfo();
console.log(vasya);
vasya.voice();
vasya.doPoop();

let sharik = new Dog("Шарик", "Дворянин", "Белый", "30");
console.log(sharik);
sharik.getInfo();
sharik.voice();
sharik.doPoop();

let pesboss = new GuideDog("Песбосс", "Лабрадор", "Черный", "40");
console.log(pesboss);
pesboss.getInfo();
pesboss.voice();
pesboss.doPoop();
pesboss.helpToOwner();

listOfAnimals = [];
listOfAnimals.push(murzik, vasya, sharik, pesboss);
petShop = new PetShop(listOfAnimals);
console.log(petShop.pets);
petShop.petFoundHisHome(vasya);
petShop.petFoundHisHome(vasya);
console.log(petShop.pets);



  
