const person = {
  my_name: "오감자",
  age: 17,
  get profile() {
    return `name : ${this.cannon}\nage: ${this.age}`;
  },
  /**
   * @param {number} number
   */
  set setAge(number) {
    this.age = number;
  }
};

console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, 'father', {
  value: "감자",
  writable: false,
  enumerable: true,
  configurable: false,
});

person.father = "피망";
console.log(Object.getOwnPropertyDescriptors(person)); //여전히 감자로 남아있는다.