var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");

// ===========================

var materials = ['wood', 'metal', 'stone']

var words = {
  "elephant": "The world's largest land mammal.",
  "school": "A place of learning.",
  "ice cream": "A delicious milk-based dessert."
}
console.log("===========================");

var num = 16

if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num === 10) {
  console.log(num + " is exactly 10.");
} else {
  console.log(num + " must be less than 10");
}

console.log("===========================");

var number = 0;

while (number < 10){
  console.log("Doing the same thing over and over");
  number ++;
}

console.log("===========================");

for (var base = 5; base <= 25; base++ ){
  console.log(base);
}

console.log("===========================");

var times = 100;
var current = 0;
var sum = 0;

while(current < times){
  sum += current;
  current ++;
}

console.log(sum);

console.log("===========================");
for (var start = 3; start <= 15; start++ ){
  if (start > 9) {
    console.log("You can get on the rollercoaster.");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

console.log("===========================");

// Create array of containers
var containers = ['purse', 'wallet', 'backpack'];

// For each container, print name
for(var number = 0; number < containers.length; number ++){
  var container = containers[number];
  console.log(container);
}
