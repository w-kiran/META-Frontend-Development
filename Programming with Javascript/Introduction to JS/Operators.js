var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

console.log(10 > 9 && 10 < 17);

console.log(true && true);

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

var currentTime = 7;
console.log(true || false);

var petHungry = true;
petHungry = !petHungry;
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);



console.log(22 % 5); // 2

console.log("inter" + "net") // "internet"
console.log("note" + "book") // "notebook"

console.log(365 + " days" )// "365 days"
console.log(12 + " months") // "12 months"

console.log(1 + "2");

var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

console.log(1 * 2 + 3);

var num = 10; // the value on the right is assigned to the variable name on the left
console.log(5 > 4 > 3); // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`

var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."

// console.log(2+2);
// console.log(20-18);
// console.log(2*3);
// console.log(5/1);
// console.log(3>2);
// console.log(2>3);
// console.log(5<1);
// console.log(1<5);
// console.log(10==10);
// console.log(10&&9);
// console.log(10||9);
console.log(10%9);
console.log(10===9);
console.log(10!=9);
console.log(10!='10');
console.log(10!==9);
console.log(10!=='10');


var score=8;
console.log("Mid-level skills:"+ ( score>0 && score<10))

var timeRemaining =0;
var energy=10;
console.log("Game over: " ,(timeRemaining == 0 || energy == 0))

var num1=2;
var num2=5;
var test1=num1 % 2;
var test2=num2 % 2;
var result1= (test1 == 0);
var result2= (test2 == 0);
var num2=5;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

var now="Now in ";
var three=3;
var d="D!";
console.log(now+ three+ d);

var counter=0;
counter+=5;
counter+=3;
console.log(counter);

