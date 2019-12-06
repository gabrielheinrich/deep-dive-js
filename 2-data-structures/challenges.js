// Just using splice, manipulate daysInWeek, so it actually contains all the days in the week and in the right order
function spliceChallenge() {
   const daysInWeek = ["Tuesday", "Fizz", "Buzz", "Wednesday", "_", "Friday"]  // don't touch this!
   // Add calls to splice here:
   daysInWeek.splice(0, 0, "Monday");
   daysInWeek.splice(2, 2);
   daysInWeek.splice(3, 1, "Thursday");
   daysInWeek.splice(5, 0, "Saturday", "Sunday");
   return daysInWeek;
}


// This code doesn't work, but with a tiny tweak it will.
/**
 * Math.max returns the largest of the given numbers
 * In order for Math.max to work when array is passed as argument, the following must be done:
 * a) either spread the array
 * b) or reduce the array by using array.reduce() where the callback function will take two array elements
 *  and do Math.max on them, resulting in single output per iteration
*/

// Solution A
function highScore() {
   const scores = [62, 234, 163, 32, 41, 272];
   return Math.max(...scores);
}

// Solution B
function highScore1() {
   const scores = [62, 234, 163, 32, 41, 272];
   return scores.reduce((a, b) => Math.max(a, b));
}

// From the glossary (alphabetically sorted list of strings), extract a subsection for a specific starting letter
// e.g. entriesStartingWith(["Adagio", "Andante", "Breve", "Cadenza", "Chorale", "Dolce"], "C") -> ["Cadenza", "Chorale"]
// Solution A (NOT OPTIMAL!)
function entriesStartingWith(glossary, startingLetter) {
   const glossaryCopy = [...glossary];
   const firstMatchIndex = glossaryCopy.findIndex(element => element.startsWith(startingLetter));
   const tempArray = glossaryCopy.splice(firstMatchIndex);
   const lastMatchIndex = tempArray.findIndex(element => !element.startsWith(startingLetter));

   return tempArray.slice(
      0,
      lastMatchIndex == -1 ? tempArray.length : lastMatchIndex
   );
}

// Solution B
function entriesStartingWith1(glossary, startingLetter) {
   let tempArray = [];
   for (let i = 0; i < glossary.length; i++) {
      if (glossary[i].startsWith(startingLetter)) {
         tempArray.push(glossary[i]);
      }
   }
   return tempArray;
}

// Without touching the array literals, and without adding any new string literals, return this array:
// ["A", "B", "C", "D", "E", "F", "G"]
function sliceSpreadChallenge() {
   const x = ["X", "A", "B", "C", "X"];
   const y = ["E", "F", "G", "X"];
   const z = ["X", "C", "D", "E"];

   slicedX = x.slice(1, 4);
   slicedZ = z.slice(2);
   slicedY = y.slice(1, 3);
   result = [...slicedX, ...slicedZ, ...slicedY];
   return result;
}

console.log(sliceSpreadChallenge());

// This is a hard one:
// Sort an array of values, by type in this order: First booleans, than numbers, than strings.
// Apart from that, the order is undefined
// sortChallenge(['a', true, 3]) -> [true, 3, 'a']
function sortChallenge(values) {
   arrayBool = [];
   arrayNum = [];
   arrayString = [];
   // for loop
   for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'boolean') {
         arrayBool.push(values[i]);
      } else if (typeof values[i] === 'number') {
         arrayNum.push(values[i]);
      } else if (typeof values[i] === 'string') {
         arrayString.push(values[i]);
      }
   }

   arrayBool.sort();
   arrayNum.sort((a, b) => a - b);
   arrayString.sort();

   arraySorted = [...arrayBool, ...arrayNum, ...arrayString];
   return arraySorted;

}

// Implement a function equivalent to Array.prototype.find with a loop
// If no element satisfies the condition return undefined
function find(array, predicate) {
   // standard for loop
   for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
         return array[i]
      }
   }

   //for of loop
   // for (let element of array) {
   //       if (predicate(element)) {
   //          return element;
   //       }
   //    }
   return undefined;
}

// Implement lastIndexOf with a loop
function lastIndexOf(array, element) {

   // standard for loop
   for (let i = array.length - 1; i >= 0; i--)
      if (array[i] === element) {
         return i;
      }

   return -1;
}

// Implement includes using indexOf
function includes(array, element) {

}

// Write a function that takes in an array of strings and checks whether each of the strings contain the letter 'A'
function everyContainsA(strings) {

}

// A bit hard, except if you use a regex.
// Write a function that takes in an array of strings and checks whether one of the strings contains a number
function someContainsNumber(strings) {

}

// Implement Array.prototype.some with a loop
function some(array, condition) {

}

// Create a function that adds a string ending to each member in an array.
// e.g. addEnding(["clever", "meek", "hurried", "nice"], "ly")
// -> ["cleverly", "meekly", "hurriedly", "nicely"]
function addEnding(array, ending) {

}

// Create a function to remove all null values from an array.
// e.g. removeNull(["a", null, "b", null]) -> ["a", "b"]
function removeNull(array) {

}

// Using reduce in combination with the concat method, write a function to flatten an array of arrays into a single array, that has all the elements of the original orrays
// e.g. flatten([['a', 'b'], ['c', 'd'], ['e']])
// -> ['a', 'b', 'c', 'd', 'e']
function flatten(array) {

}

// Add destructuring to the parameter list to make this function return user.email
function getEmail(user) {
   return email;
}

// Use destructuring and the spread syntax: return the user object, but with the email swapped out for newEmail
function resetEmail(user, newEmail) {
   return {}
}

// Object iteration: check that all keys in the object are truthy
// allValuesAreTruthy({a: 1, b: 2}) -> true
// allValuesAreTruthy({a: 1, b: 0}) -> false
// allValuesAreTruthy({a: 1, b: ""}) -> false
function allValuesAreTruthy(object) {
}

module.exports = {
   spliceChallenge,
   sliceSpreadChallenge,
   highScore,
   highScore1,
   sortChallenge,
   entriesStartingWith,
   entriesStartingWith1,
   find,
   lastIndexOf,
   includes,
   everyContainsA,
   someContainsNumber,
   some,
   addEnding,
   removeNull,
   flatten,
   getEmail,
   resetEmail,
   allValuesAreTruthy
};

