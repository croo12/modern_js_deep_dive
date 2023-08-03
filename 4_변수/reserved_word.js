debugger; //디버깅 시 브레이크문과 같은 기능을 한다. 디버깅 기능이 없다면 아무런 작동도 하지 않는다.

//delete 객체의 속성을 제거한다

const obj = {
  name : "대충 지은 이름",
  age : 16,
}

console.log(obj.name); //대충 지은 이름

delete obj.name;

console.log(obj.name); //undefined
//어디서도 이 참조를 사용하지 않는다면 나중에 가비지컬렉터가 회수해감

delete obj;

console.log(obj); // obj 안삭제됨