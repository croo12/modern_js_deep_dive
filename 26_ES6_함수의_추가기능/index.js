class 인간 {
    #name;
    age;
    constructor() {
        this.#name = "비밀임";
        this.age = 29;
    }

    introduce_myself() {
        console.log(`제 이름은 ${this.#name}이고 나이는 ${this.age}살 입니다.`);
    }

    static check_laptilian() {
        console.log(`랩틸리언 아님`);
    }

    yell_name = () => {
        console.log(this.#name);
    }
}

인간.check_laptilian();

const 나 = new 인간();
나.introduce_myself();

//화살표 함수는 this 바인딩을 갖지 않는다.
//그러므로 다른 식별자들 처럼 스코프 체인을 따라 프로토타입의 this를 찾아 호출한다.
//즉 화살표 함수의 this는 함수를 정의한 위치에 따라 결정된다. super와 arguments역시 이렇게 동작한다.
//lexical this.
나.yell_name(); //비밀임

const 다른사람 = new 인간();

console.log(나.introduce_myself === 다른사람.introduce_myself); //true;
console.log(나.yell_name === 다른사람.yell_name); //false;

// console.log(나.#name); //#을 붙이면 private 필드라 접근 불가능