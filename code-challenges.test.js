// ASSESSMENT 2: Coding Practical Questions with Jest

const { it } = require("jest-circus")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

let numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
let numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// i had the most trouble with jest, i couldnt get it to work? i tried a bunch i tried on this page, i tried on the file i had jest alreay installed so what i did was just did the best i could, i wasnt able to test anything but i wrote the code i thought would work

describe("multThree", () => {
    it("take in a array of numbers and returns an array with the numbers multiplied by 3", () => {

        let numbersArray1 = [6, 7, 8, 9, 10]
        let numbersArray2 = [24, 27, 30, 33, 36]
       

        expect(multThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})



// so for this i need to make a function that cicled thought a array and returned a array that multiplied the value by three and returned a array with those values.
// create a function with a variable called multThree
// define a variable to equal the product of the quotation  
// use the .map method to define and arrange the product in a array
// return array

const multThree = (array) => {
    let mappedArray = array.map(value => value * 3)
    return mappedArray
}


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// This one gave me the most problems, i know that there must be some matcher from jest to add the perimeters of testing this but because i couldnt get the test going i wasnt able to poke things around. i think this one was close but i also like the .toBeFalsy one too

expect.extend({
    async toBeDivisibleByExternalValue(received) {
      const externalValue = await getExternalValueFromRemoteSource();
      const pass = received % externalValue == 0;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be divisible by ${externalValue}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be divisible by ${externalValue}`,
          pass: false,
        };
      }
    },
  });
  
  test('is divisible by external value', async () => {
    await expect(100).toBeDivisibleByExternalValue();
    await expect(101).not.toBeDivisibleByExternalValue();
  });

  // create a var called divisByThree
  // use a if statement to filter the result
  // use the modulus operator to determine if the value is divisible by 3
  // if true return is divisible 
  // else not divisible 

const divisByThree = (num) => {
    if (num => num % 3 === 0){
        return `${num} is divisible by three`
    } else  {
        return `${num} is not divisible by three`
    }
 }
 



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.





describe("allCaps", () => {

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclustion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

    it("takes in a array of words and returns a array with all the words capitalized", () => {
      expect(allCaps(randomNouns1)).toEqual(["STREETLAMP", "POTATO", "TEETH", "CONCLUSTION", "NEPHEW"])
      expect(allCaps(randomNouns2)).toEqual(["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO", "DEDUCTION"])
    
    })
  })


 const randomNouns1 = ["streetlamp", "potato", "teeth", "conclustion", "nephew"]
 const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
 
 
 //create a variable called allCaps
 // crate a variable cappedArray
 // use .method function to itterate through array and return array
 // use .toUpperCase operator to change array elements to caps\
// retuen array

 const allCaps = (array) => {
    let cappedArray = array.map(array => array.toUpperCase())
    return cappedArray
}
console.log(allCaps(randomNouns1))



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2





describe("foundVowel", () => {
    let vowelTester1 = "learn"
    let vowelTester2 = "academy"
    let vowelTester3 = "challenges"

    it("returns index of the first vowel in a string", () => {
      expect(foundVowel(vowelTester1)).toEqual("1")
      expect(foundVowel(vowelTester2)).toEqual("0")
      expect(foundVowel(vowelTester3)).toEqual("2")
      
    })
  })

 //create a variable called foundVowel
 // crate a variable found
 // use .search function to itterate through the string and the index of the first defined perimeter 
// retuen index


let vowelTester1 = "learn"
let vowelTester2 = "academy"
let vowelTester3 = "challenges"

const foundVowel = (array) => {
    let found = array.search(/[a,e,i,o,u]/)
    return found
}


