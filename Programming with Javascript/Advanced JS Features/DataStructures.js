// the focus is on three specific methods that exist on arrays:
//  forEach 
//  filter
//  map

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index+1}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index+1}. ${veggie}`);
});

const nums = [0,10,20,30,40,50];
console.log(nums.filter(function(num){return( num > 30)}));

console.log([0,10,20,30,40,50].map( function(num){return num / 10}));

// Working with objects
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// Working with Maps 
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
bestBoxers.get(1); // 'The Champion'

// Working with Sets
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);