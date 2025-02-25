alert("hi");

console.log("lalalala");


const a = 5;
const b = 2;
let myName = "nico";

console.log(a * b);
console.log(a / b);
console.log(a + b);
console.log("hello " + myName)


myName = "Lynn"

console.log("hello " + myName)

const amIFat = true;
console.log(amIFat);

const nott = null;
console.log(nott);

let something;
console.log(something, nott);


const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]
console.log(daysOfWeek)

// Get Item from Array
console.log(daysOfWeek[4])

// Add one more day to the array
daysOfWeek.push("sun")

console.log(daysOfWeek)

// bad
const playerName = "hoon"
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "very fat";

// better
const player =  {
    name: "hoon",
    point: 121212,
    fat: true
}

console.log(player)

player.fat = false
player.lastname = "Lee"

console.log(player)
