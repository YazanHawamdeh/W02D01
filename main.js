console.log(arrowTitle)

/*
/* START CODE UNDER THIS LINE *//*
const colors=["red","yollow","green"];
const negativeNumbers=[-1,-2,-3,-4,-5];
const food=["pizza","shawrma","borger"];
const numbers=[[1,3,5],[2,4,6]],

//////////////////////////////////////////////////////////////////////////////////////  

const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]; // orderedPlanets[3]
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"]; //orderedPlanets[0]

const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"]; //animals[animals.length-1];

///////////////////////////////////////////////////////////////////////////////////////////

// a- use the `length` property
const orderedPlanets = ["Mercury", "Venus", "Earth", "Jupiter"]; //orderedPlanets[orderedPlanets.length]="Mars"
// b- don't use the `length` property (use the index)
const unorderedPlanets = ["Mars", "Earth", "Mercury"]; //orderedPlanets.indexOf[3]="Mars"

////////////////////////////////////////////////////////////////////////////////////////////

const animals = ["Cat", "Dog", "Dolphin", "Squirrel"]; //indexOf(0)="koala"

////////////////////////////////////////////////////////////////////////////////////////// 

const reptiles = ["Snake", "Lizard", "Turtle"];
 reptiles.push("Dinosaur");

 const fish = ["Swordfish", "Clownfish", "Shark"];
 fish.unshift("Goldfish")

 reptiles.shift();
 fish.pop();

 //////////////////////////////////////////////////////////////////////////////////////////////////////////

 let jj=[1, 9, 9, 3];
 jj.join();

 let str=["John", "Doe", "The Third"];
 str.join();

 let rev1=["hello", "world"];
 rev1.reverse();

 let rev2=[1, 2, 3, 4];
 rev2.reverse("-");


 */
 //////////////////////////////////////////////////////////////////////////////////////////

 const addToArray = function (array, string) {
    // TODO: Your code here
    
   array.push(string);
    return array;
  };
  /*
  addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
  addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]*/

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  const convertToString = function (array) {
    // TODO: Your code here
    return array.join(" ");
  };
  /*
  convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
  convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"*/

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  const accessElement = function (array, index) {
    // TODO: Your code here
    if(array[index]!=null){
        return array[index];

    }else
     return  "No element at index 10";

  };
  /*
  accessElement([1, 2, 3, 4, 5], 0); // => 1
  accessElement([1, 2, 3, 4, 5], 3); // => 4
  accessElement([1, 2, 3, 4, 5], 10); // => "No element at index 10"*/

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  const isInArray = function (array, string) {
    // TODO: Your code here
    if(array.indexOf(string)!=-1){
return true;

    }

    else
    return false;
  };
  /*
  isInArray(["John", "Jane", "Mark"], "Jane"); // => true
  isInArray(["John", "Jane", "Mark"], "Mark"); // => true
  isInArray(["John", "Jane", "Mark"], "Smith"); // => false
  isInArray(["John", "Jane", "Mark"], "Doe"); // => false*/

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  // split: is a string method that is used to convert a string into an array and the values will be separated depending on the
// argument passed into the split method (opposite of join)
const word = "Hello";
// if an empty string is passed as an argument then the string will be split on every character
word.split(""); // => ["H", "e", "l", "l", "o"]
// if we pass the letter "e" as an argument, it will split the string on every "e" in that string. Since there is only one "e", the string has split into an array with two elements
word.split("e"); // => ["H", "llo"]
// if an empty space (" ") is passed as an argument, the string will be split on every empty space
const words = "This is a string that contains words";
words.split(" "); // => ["This", "is", "a", "string", "that", "contains", "words"]*/

const reverseWords = function (string) {
  // TODO: Your code here
  let str1=string.split(" ");
  if(str1.length==1){
      return str1.join();
  }
  else if(str1.length==2){
      return str1.reverse().join(" ");
  }
};

/*
reverseWords("Hello"); // => "Hello"
reverseWords("Hello World"); // => "World Hello"*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// do not use `push` or array assignments, only `unshift`
const addToLast = function (array, value) {
    // TODO: Your code here
    array.unshift(0,value);
   return array;
  };
  /*
  addToLast([1, 2, 3], 4); // => [1, 2, 3, 4]
  addToLast([10, 6], 1); // => [10, 6, 1]*/


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
    // do not use array.length
    // TODO: Your code here
    let num1=array[0];
    array.reverse();
    let num2=array.indexOf(num1);
    
    return num2+1;
    
  };
  /*
  getLength([1, 2, 3, 4]); // => 4
  getLength([10, 22, 30]); // => 3*/
  
  // write a function `getFirstVal` that accepts an array and returns the
  // first value of the array without using the index to access the value
  const getFirstVal = function (array) {
    // do not use array[0]
    // TODO: Your code here
    let num1=array[array.length-1];
    array.reverse();
    
    
    return array[array.length-1];
  };
  /*
  getFirstVal([1, 2, 3, 4]); // => 1
  getFirstVal([51, 3, 3, 4]); // => 51*/

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, value, index) {
    // TODO: Your code here
     array[index]=value;
     return array;
  };
  /*
  updateOrCreate([10, 20, 30], 50, 1); // => [10, 50, 30]
  updateOrCreate([10, 20, 30], 40, 3); // => [10, 20, 30, 40]
  updateOrCreate([10, 20, 30], 100, 10); // => [10, 20, 30, empty * 7, 100]*/