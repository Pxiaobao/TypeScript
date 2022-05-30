"use strict";
let a = 10;
console.log('hello' + a);
let b = false;
function sum(a, b) {
    return a + b;
}
let d;
d = 'sss';
b = d;
console.log(b);
function fn(num) {
    if (num > 0) {
        return true;
    }
    else {
        return '123';
    }
}
function fn1(num) {
}
function fn2() {
    throw new Error('报错了');
}
let box1 = document.getElementById("box1");
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener("click", () => {
    alert('hello');
});
