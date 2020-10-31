function People(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
} //menambahkan introMyself ke people
People.prototype.introMyself = function() {
    //this -> People
    setTimeout(function() {
        //this -> ??
        console.log(`Hello! Nama saya ${this.name},umur saya ${this.age}.`);
        console.log(`Hobby saya adalah ${this.hobby}`);
    }, 300)
}

const programmer = new People("faizah", 20, ["coding", "reading", "cooking"]);
programmer.introMyself();