var x = 'global';

function foo() {
  console.log(x); //undefined
  //let으로 바꾸면 Cannot access 'x' before initialization error가 발생한다.
  //js의 호이스팅은 스코프 단위로 이루어지기 때문이다.
  var x = 'local';
}

foo();

console.log(global); //전역객체 global, 웹 환경에서는 window, node환경에서는 global였으나
console.log(globalThis) //ES11에서 globalThis로 통일했다.