var bird =
{
    haswings: true,
    canFly: true,
    hasFeathers: true
}
var eagle1 = Object.create (bird);
console.log("eagle1:", eagle1);

console.log("eagle1 has wings:", eagle1.haswings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 has feathers:", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings:", eagle2.haswings);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1: ", penguin1);
console.log("penguin1 has feathers:", penguin1.hasFeathers);
console.log("penguin1 can fly:", penguin1.canFly);

