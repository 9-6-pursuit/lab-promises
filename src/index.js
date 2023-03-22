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
function logResult(person) {
  let promise = finder(person.first, person.last)
  promise.then(result => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
}

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
}
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
function logThreeResultsCities(person1,person2,person3) {
  // let promise = finder(person1.first, person1.last)
  // promise.then(result => {
  //   console.log(result)
  // }).catch(error => {
  //   console.log(error)
  // })
  for (let i = 0; i < arguments.length; i++) {
    let promise =finder(arguments[i].first, arguments[i].last)
    promise.then(result => {
      console.log(result[0].city)
    }).catch(error => {
      console.log(error)
    })   
  }
} 

// result[0].city need to recognize the city !

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
