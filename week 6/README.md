# JS Closures exercises (MVP)

1. In your own terms, define what a Closure is in Javascript
    A closure is simply a function inside of another function and also a function that uses a variable outside of it's scope.

2. What is result?
      5
```
var a = 1;

function someFunction(number) {

  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
```


3. What will you see in the console for the following example? Explain Why

```
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
```
the console, will be 1, this because  var a has the initial value of 1 at the global scope, while the other value of var a which is 10 can only be accessed within the function where it was assigned.