//내부메서드 [[Call]]과 [[Construct]]
//호출하려면 Call 메서드가 필요하다 -> 모든 함수는 호출 가능하므로 Call메서드가 있음
//생성자로 호출하려면 Construct가 필요함. -> 없는 함수도 있다.

//Construct가 있는 함수
function 함수선언문() {
  this.name = "함수선언문";
}

const 함수표현식 = function() {
  this.name = "함수표현식"
}

class 클래스도함수임 {
  name = "클래스도 함수임";
}

console.log(new 함수선언문()); //작동한다
console.log(new 함수표현식()); //작동한다
console.log(new 클래스도함수임()); //작동한다

//Construct가 없는 함수

const 화살표함수 = () => {
  this.name = "화살표함수"
}

const 오브젝트 = {
  메서드() {
    this.name = "메서드";
  },
  이것도메서드아닌가: function() {
    this.name = "이것도 메서드 아닌가";
  }
}

// console.log(new 화살표함수()); //TypeError: 화살표함수 is not a constructor
// console.log(new 오브젝트.메서드()); //TypeError: 오브젝트.메서드 is not a constructor
console.log(new 오브젝트.이것도메서드아닌가()); //이건 작동함

//메서드로 인정받는 건 오직 ES6의 축약표현식을 사용했을 때 뿐임

function Circle(color) {
  //new를 쓰지 않고 호출한 함수는 new.target == undefined임
  //IE에서는 지원 안되므로 아래와 같은 구문을 이용해 같은 효과를 줄 수 있다.
  /**
   * if (this typeof Color) {
   *  return new Circle(color);
   * }
   */
  if (!new.target) {
    return new Circle(color);
  }

  this.name = "Circle";
  this.color = color;
}

console.log(Circle("red"));