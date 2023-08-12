const foo = function() {
    console.dir(this);
}

//일반 함수 호출
//this는 전역객체를 가리킨다.
foo(); //Object [global]

const 객체 = {foo};

//메서드 호출
//this는 호출한 객체 "객체"를 가리킨다.
객체.foo(); // 객체 { foo: [Functoion: foo] }

//생성자 호출
//this는 생성자가 생성할 객체를 가리킨다.
new foo(); //foo {}

//간접 호출
//첫번째 인수로 전달한 객체를 가리킨다.
const bar = { name: 'bar'};

foo.call(bar); // {name: bar}
foo.apply(bar); // {name: bar}
foo.bind(bar)(); // {name: bar}

//화살표 함수의 this는 상위 스코프의 this를 가리킨다.