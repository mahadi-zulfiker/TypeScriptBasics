import { formatString, filterByRating, concatenateArrays, Car, processValue, Product, getMostExpensiveProduct, Day, getDayType, squareAsync } from './allSolutions';

console.log(formatString("Hello"));
console.log(formatString("Hello", false));
console.log(formatString("Hello", true));

// Test Problem 2: filterByRating
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));

// Test Problem 3: concatenateArrays
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Test Problem 4: Vehicle and Car
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// Test Problem 5: processValue
console.log(processValue("hello"));
console.log(processValue(10));

// Test Problem 6: getMostExpensiveProduct
const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
console.log(getMostExpensiveProduct([]));

// Test Problem 7: getDayType
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

// Test Problem 8: squareAsync
async function testSquareAsync() {
  try {
    const result1 = await squareAsync(4);
    console.log(result1);
    
    await squareAsync(-3);
  } catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred");
    }
  }
}
testSquareAsync();