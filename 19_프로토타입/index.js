function Circle(radius) {
    this.radius = radius;
    this.getArea = () => {
        return Math.PI * this.radius ** 2;
    }
}

const c1 = new Circle(2);
const c2 = new Circle(3);

console.log(c1.getArea === c2.getArea); //false
console.log(c1.getArea()); //12.566370614359172
console.log(c2.getArea()); //28.274333882308138
//getArea는 어차피 같은 함수인데 생성할 때마다 새 getArea가 중복생성되는 낭비가 발생한다.

function NewCircle(radius) {
    this.radius = radius;
}

NewCircle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}

const nc1 = new NewCircle(2);
const nc2 = new NewCircle(3);

console.log(nc1.getArea === nc2.getArea); //true
console.log(nc1.getArea()); //12.566370614359172
console.log(nc2.getArea()); //28.274333882308138

//동작은 같다. 메모리 낭비는 줄어들었다