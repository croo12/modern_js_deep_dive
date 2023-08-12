class Foo {}
const foo = new Foo;
console.log(foo);

const Person = (function() {

    function Person() {
        this.color = "yellow";
        this.country = "korea"; 
    }
    
    Person.prototype = {
        sayColor() {
            console.log(this.color);
        }
    }

    return Person;
})();

const p1 = new Person();
p1.sayColor();
console.log(p1.constructor); //Function: Object.
console.log(Person.prototype); //새로 바뀐 prototype을 찍고 있다
//내가 임의로 교체한 프로토타입 (sayColor를 갖고 있는 객체)
//은 constructor 프로퍼티가 없으므로 프로퍼티를 찾을 수 없어 더 부모인
//Object로 가서 constructor 프로퍼티를 찾는다. 
//그러므로 오브젝트가 나오게 된다.

const NewPerson = (function() {

    function NewPerson() {
        this.color = "green";
        this.country = "korea"; 
    }

    return NewPerson;
})();

const parent = {
    sayColor() {
        console.log(this.color);
    }
}

const np1 = new NewPerson();

Object.setPrototypeOf(np1, parent); 

np1.sayColor();
console.log(np1.constructor); //Function: Object.
console.log(NewPerson.prototype); //새로 생긴 프로토타입이 누군지 몰라서 못찍음 : {}