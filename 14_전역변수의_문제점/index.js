var x = 'global';

function foo() {
  console.log(x); //undefined
  //let으로 바꾸면 Cannot access 'x' before initialization error가 발생한다.
  //js의 호이스팅은 스코프 단위로 이루어지기 때문이다.
  var x = 'local';
}

foo();