var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
console.log(fruits);

fruits.pop();
console.log(fruits); // ['apple']


function arrayBuilder1(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder1('banana', 'pear', 'plum'); // ['banana', 'pear', 'plum']

function arrayBuilder2(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder2('apple', 'pear', 'plum');

console.log(simpleArr); // ['apple','pear','plum']