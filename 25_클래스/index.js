/*
클래스는 단지 문법적 편의성을 제공하는 것 뿐일까?

클래스는 [[Constuct]]를 가진 함수와 매우 비슷하게 동작하지만 몇가지 차이점이 있다.

1. 클래스는 new 없이 호출할 수 없다.
2. 클래스는 extends와 super키워드를 지원한다
3. 클래스 선언문은 let과 const처럼 호이스팅이 동작한다.
4. 클래스 내부는 strict mode가 적용되며 해제할 수 없다.
5. 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두 [[Enumerable]]이 false다.
    즉, 열거되지 않는다.

그러므로 클래스는 단순한 문법적 편의성을 제공한다기 보다, 새로운 객체 생성 매커니즘으로 보는 편이 좋다는 것이
deep dive 저자의 의견입니당.
*/

//클래스 선언문
class 클래스 {
    constructor() {
        //생성자
        //클래스는 평가된 후 constructor 함수 객체가 된다.
    }

    sayMyName() {
        //프로토타입 메서드
        console.log("나는 클래스다");
    }

    static testing() {
        //정적 메서드
        console.log("클래스입니다...");
    }
}; 

//클래스는 표현식도 있다. 즉 클래스는 1급 객체임.
const 클래스_표현식 = class {};

console.log(클래스); //[class 클래스]
console.log(클래스_표현식); //[class 클래스_표현식]

const 인스턴스 = new 클래스();

인스턴스.sayMyName(); //나는 클래스다.
클래스.testing(); //클래스입니다...