// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
//PSEUDO Code:
    // create describe function. Call it newSentence
    // create the it function with the description "Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized".
    // state desired outcomes with expect statements contained declared variables

describe("sentence", () => {
      it("Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
  expect(Sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Good failure. function 'sentence' undefined:
// next task is to define sentence function that takes in an array of key value pairs
// the function has to itterate over array using .map
// take each {Hash}, dissessemble, and create new array
      // use .split
// capitalize the 0 index of string
// $ /Users/learnacademy/Desktop/week-6-assessment-rgilliam83/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   sentence
//     ✕ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ● sentence › Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//     ReferenceError: sentence is not defined

//       24 | ]
//       25 |
//     > 26 |       expect(sentence(people)).toEqual("Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.")
//          |       ^
//       27 |   })
//       28 | })
//       29 | // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//       at Object.expect (code-challenges.test.js:26:7)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.179 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const Sentence = (array) => {
  return array.map(person => person.name
    .split(" ")
    .map(sepName => sepName[0].toUpperCase() + sepName.slice(1))
    .join(" ") +  ` is ${person.occupation}.`

    )
}

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-rgilliam83/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   Sentence
//     ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.171 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.90s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

//PSEUDO Code:
    // create describe function. Call it mixedData
    // create the it function with the description "Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3".
    // state desired outcomes with expect statements contained declared variables

describe("mixedData", () => {
  it("Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

  expect(mixedData(hodgepodge1)).toEqual([2, 0, -1, 0])
  expect(mixedData(hodgepodge2)).toEqual([2, 1, -1])

  })
})

// Good failure. function 'sentence' undefined:
// declare mixedData function
// function has to take in array of multiple data types
// interate through speified array to indentify integer data type
// take new array of numbers divide each index position by 3
// return remainders in new array


// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-rgilliam83/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   sentence
//     ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
//   mixedData
//     ✕ Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//   ● mixedData › Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//     ReferenceError: mixedData is not defined

//       100 |     // Expected output: [ 2, 1, -1 ]
//       101 |
//     > 102 |   expect(mixedData(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//           |   ^
//       103 |   expect(mixedData(hodgepodge2)).toEqual([ 2, 1, -1 ])
//       104 |
//       105 |   })

//       at Object.expect (code-challenges.test.js:102:3)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.17 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.

const mixedData = (newArr) => {
  return newArr.filter(value => typeof value === "number").map(value => value % 3)
}

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-rgilliam83/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   sentence
//     ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
//   mixedData
//     ✓ Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.171 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.49s.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

//PSEUDO Code:
    // create describe function. Call it sumOfAll
    // create the it function with the description "Create a function that takes in an array of numbers and returns the sum of all the numbers cubed".
    // state desired outcomes with expect statements contained declared variables

    describe("sumOfAll", () => {
      it("Create a function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {

      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125

        expect(sumOfAll(cubeAndSum1)).toEqual(99)
        expect(sumOfAll(cubeAndSum2)).toEqual(1125)

    })
  })


// declare sumOfAll funtion
// function must take in array of numbers
// cube each indexed position and add each indexed position (cubed)
// return sum of each cubed integer 

//   yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-rgilliam83/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   sentence
//     ✓ Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
//   mixedData
//     ✓ Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
//   sumOfAll
//     ✕ Create a function that takes in an array of numbers and returns the sum of all the numbers cubed

//   ● sumOfAll › Create a function that takes in an array of numbers and returns the sum of all the numbers cubed

//     ReferenceError: sumOfAll is not defined

//       191 |
//       192 |
//     > 193 |         expect(sumOfAll(cubeAndSum1)).toEqual(99)
//           |         ^
//       194 |         expect(sumOfAll(cubeAndSum2)).toEqual(1125)
//       195 |
//       196 |     })

//       at Object.expect (code-challenges.test.js:193:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.186 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


// b) Create the function that makes the test pass.


const sumOfAll = (newArr) => {
  let Cubed = 0
  newArr.forEach(value => Cubed += value ** 3 )
  return Cubed
}