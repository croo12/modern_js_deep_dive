class Person {
  raptilian = false;
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }

  dance() {
    console.log("열심히 춤을춰");
  }
}

class LeeJiWoo extends Person {
  babarian = super.name; //undefined임

  constructor(subject) {
    super("이지우", "19940314")

    console.log(super.raptilian) // undefined    
    console.log(super.name) // undefined    
    super.dance();//is work

    // delete super.name
    // ReferenceError: Unsupported reference to 'super' 부모요소 삭제 금지

    this.subject = subject;
  }
}

const p = new Person("이지우", "19940314")

console.log(p);

const me = new LeeJiWoo("경영학");

console.log(me);