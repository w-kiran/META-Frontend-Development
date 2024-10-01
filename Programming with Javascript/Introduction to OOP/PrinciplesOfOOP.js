class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal)


class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log (Animal)


class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }


"abc".toUpperCase();


const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}


bicycle.bell(); // "Get away, please"


door.bell(); // "Come here, please"


function ringTheBell(thing) {
    console.log(thing.bell())
}


ringTheBell(bicycle); // Ring, ring! Watch out, please!


ringTheBell(door); // "Ring, ring! Come here, please!"


"abc".concat("def"); // 'abcdef'


["abc"].concat(["def"]); // ['abc', 'def']


["abc"] + ["def"]; // ["abcdef"]


class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"



