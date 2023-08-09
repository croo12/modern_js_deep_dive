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
//내가 임의로 교체한 프로토타입 (sayColor를 갖고 있는 객체)
//은 constructor 프로퍼티가 없으므로 프로퍼티를 찾을 수 없어 더 부모인
//Object로 가서 constructor 프로퍼티를 찾는다. 
//그러므로 오브젝트가 나오게 된다.