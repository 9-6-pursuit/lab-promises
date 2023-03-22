// Do not change the line directly below.
const finder = require("./helpers/finder");

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */

//Promises in JavaScript are a way to handle asynchronous tasks, like fetching data or performing calculations, without blocking the main thread. They allow you to write code that looks synchronous but actually executes asynchronously. Promises have methods like then() and catch() to specify what should happen when the operation succeeds or fails. By using Promises, you can avoid nested callbacks and make your code more readable and maintainable. They also provide better error handling, easier chaining of operations, and a more modular approach to programming. [Side note: Modular programming is a general programming concept. It involves separating a program's functions into independent pieces or building blocks, each containing all the parts needed to execute a single aspect of the functionality.]

function logResult(person) {
  let promise = finder(person.first, person.last)
  promise.then(result => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
} //For future reference, the logResult() function takes a single parameter (person), representing a person's first (person.first) and last name (person.last), and logs the entire array of objects returned by finder() to the console. It makes use of a Promise returned by finder() to handle asynchronous data retrieval.

/**
 * logTwoResults()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function for two different people.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 */
function logTwoResults(person1, person2) {
  let firstPromise = finder(person1.first, person1.last)
  firstPromise.then(result => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
  let secondPromise = finder(person2.first, person2.last)
  secondPromise.then(result => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
}//For future reference, the logResult() function takes two parameter (person1, person2), that representing a person's first (person.first) and last name (person.last), and logs the entire array of objects returned by finder() for both individuals to the console. It makes use of a Promise returned by finder() to handle asynchronous data retrieval.

/**
 * logThreeResultsCities()
 * ========================
 * Logs out just the cities from all three people given to the function. You may assume that each search result will only return a single person.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 * @param {Object} person3 - A person's names. In the same format as person1.
 */
function logThreeResultsCities(person1, person2, person3) {
  let promiseCityOne = finder(person1.first, person1.last)
  promiseCityOne.then(result => {
    console.log(result[0].city)
  }).catch(error => {
    console.log(error)
  })
  let promiseCityTwo = finder(person2.first, person2.last)
  promiseCityTwo.then(result => {
    console.log(result[0].city)
  }).catch(error => {
    console.log(error)
  })
  let promiseCityThree = finder(person3.first, person3.last)
  promiseCityThree.then(result => {
    console.log(result[0].city)
  }).catch(error => {
    console.log(error)
  })
}/* For future reference, the logThreeResultsCities() function takes three parameters (person1, person2, person3), each representing a person's first and last name, and logs only the city of residence for each individual to the console. It uses Promises to handle the asynchronous data retrieval. 
  
{ first: "Joyce", last: "Wilkins" }, // Kohatk
      { first: "Marshall", last: "Short" }, // Soham
      { first: "Janet", last: "Evans" } // Lafferty

*/


/* 
describe("logThreeResultsCities()", () => {
  it("should log all three cities, if given three valid people", async () => {
    await logThreeResultsCities(
      { first: "Joyce", last: "Wilkins" }, // Kohatk
      { first: "Marshall", last: "Short" }, // Soham
      { first: "Janet", last: "Evans" } // Lafferty
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith("Kohatk");
    expect(console.log).toHaveBeenCalledWith("Soham");
    expect(console.log).toHaveBeenCalledWith("Lafferty");
  });

  it("should log the validation error when a name is incomplete", async () => {
    await logThreeResultsCities(
      { first: "Joyce", last: "Wilkins" }, // Kohatk
      { first: "Marshall" }, // Soham
      { first: "Janet", last: "Evans" } // Lafferty
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "First and Last name are required to search."
    );
  });

  it("should log the validation error when a name does not find a match", async () => {
    await logThreeResultsCities(
      { first: "Joyce", last: "Wilkins" }, // Kohatk
      { first: "Marshall", last: "Short" }, // Soham
      { first: "Janet", last: "Peterson" } // Lafferty
    );
    await new Promise((resolve) => setTimeout(resolve, 300));

    expect(console.log).toHaveBeenCalledWith(
      "No results found for the given search parameters."
    );
  });
});
*/


// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
