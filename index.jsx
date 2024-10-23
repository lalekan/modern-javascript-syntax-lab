const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

//Exercise 1

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums2 = nums.map((currentElement) => {
    return currentElement * 2
})
console.log(nums2)

//Element 

//Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];


// Your code here

const [firstFood, secondFood] = pizzaToppings
console.log(firstFood)
console.log(secondFood)

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const {make, model} = car

console.log(make, model)

// Exercise 4:

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.


// Your code here
const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings)

// Exercise 5:

// Duplicate the following object and spread its values into a new variable `myCar`.

  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  
  const myCar = {...car};
  myCar.model = 'q7'

  console.log(myCar)

  // Exercise 6:
  