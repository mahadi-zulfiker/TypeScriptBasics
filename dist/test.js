"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const allSolutions_1 = require("./allSolutions");
console.log((0, allSolutions_1.formatString)("Hello"));
console.log((0, allSolutions_1.formatString)("Hello", false));
console.log((0, allSolutions_1.formatString)("Hello", false));
// Test Problem 2: filterByRating
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log((0, allSolutions_1.filterByRating)(books));
// Test Problem 3: concatenateArrays
console.log((0, allSolutions_1.concatenateArrays)(["a", "b"], ["c"]));
console.log((0, allSolutions_1.concatenateArrays)([1, 2], [3, 4], [5]));
// Test Problem 4: Vehicle and Car
const myCar = new allSolutions_1.Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
// Test Problem 5: processValue
console.log((0, allSolutions_1.processValue)("hello"));
console.log((0, allSolutions_1.processValue)(10));
// Test Problem 6: getMostExpensiveProduct
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log((0, allSolutions_1.getMostExpensiveProduct)(products));
console.log((0, allSolutions_1.getMostExpensiveProduct)([]));
// Test Problem 7: getDayType
console.log((0, allSolutions_1.getDayType)(allSolutions_1.Day.Monday));
console.log((0, allSolutions_1.getDayType)(allSolutions_1.Day.Sunday));
// Test Problem 8: squareAsync
function testSquareAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result1 = yield (0, allSolutions_1.squareAsync)(4);
            console.log(result1);
            yield (0, allSolutions_1.squareAsync)(-3);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error("An unknown error occurred");
            }
        }
    });
}
testSquareAsync();
