//this

function test() {
  console.log(this);
}

const obj = {
  x() {
    console.log(this);
  },
}

//일반 함수 호출 -> 전역 객체
test(); // global 객체

//메서드 호출에 사용 -> 호출한 객체
obj.x(); // { x: [Function x] }

//생성자로 사용 -> 생성될 인스턴스
new test(); // test {}