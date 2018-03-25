document.write("Hello, World!");



var hacker = {
    firstName : "Pranay",
    lastName : "Mundra",
    age: 19,
    eyeColor : "black"
};

console.log(hacker);

var hackerName = hacker.firstName;
var age = hacker.age;
var colors = ['blue', 'green', 'red', 'gray'];
var lastName = "Mundra2";



// document.getElementById("info").innerHTML = "Hacker Name: " + hackerName + " . Age: " + age + ".";
displayHacker(hackerName, age);

function displayHacker(name, age) {
    var lastName = "Mundra"
    document.getElementById("info").innerHTML = "Hacker Name: " + name + lastName + " . Age: " + age + ".";
};

function favColor() {
    var newColor = document.getElementById("inputColor").value;
    document.getElementById("displayColor").style.backgroundColor = newColor;
    if (colors.indexOf(newColor) === -1) {
        colors.push(newColor);
    }
    console.log(colors.toString());
};
console.log(hackerName);
console.log(age);
console.log(lastName);
console.log(colors.toString());
