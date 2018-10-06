const bandNumber = 1;
let currentNumber = bandNumber;
let bandList = "";

const takeNumber = function (band) {
   
   
   bandList = currentNumber + ". " + band;
   currentNumber++;
   return bandList;

}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console