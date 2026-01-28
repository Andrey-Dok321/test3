'use strict';

let a = document.getElementById('a');
let ans1 = document.getElementById('name');
console.log("a");
a.addEventListener('click', () => {
    console.log("a");
    let ans = document.getElementById('name').value;
    console.log(ans);
});