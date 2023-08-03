class Triple {
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18
console.log(BiggerTriple.triple(3)); // 81
var tp = new Triple();
console.log(BiggerTriple.triple(3)); // 81
console.log(tp.triple()); // 'tp.triple is not a function.'.
console.log(tp.constructor.triple(4)); // 12