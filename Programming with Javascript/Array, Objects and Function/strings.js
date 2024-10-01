//arrays are iterable
var veg=['onion','potato','carrot'];
console.log(veg.length);
console.log(veg[0]);
console.log(veg[1]);

for(var i=0;i<veg.length;i++)
{
    console.log(veg[i]);
}

//strings are iterable
var greeting='Hello';
console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);

for(var i=0;i<greeting.length;i++)
{
    console.log(greeting[i]);
}

// string!==array
var greet ='Hello';
var user ="Lisa";

// console.log(greet.pop());
console.log(greet+user);
console.log(greet.concat(user));
