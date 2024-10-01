for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');

var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');

var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');

var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}