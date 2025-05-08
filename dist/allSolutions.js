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
exports.Day = exports.Car = exports.Vehicle = void 0;
exports.formatString = formatString;
exports.filterByRating = filterByRating;
exports.concatenateArrays = concatenateArrays;
exports.processValue = processValue;
exports.getMostExpensiveProduct = getMostExpensiveProduct;
exports.getDayType = getDayType;
exports.squareAsync = squareAsync;
function formatString(input, toUpper = true) {
    if (toUpper) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
function filterByRating(items) {
    let result = [];
    for (let item of items) {
        if (item.rating >= 4) {
            result.push(item);
        }
    }
    return result;
}
function concatenateArrays(...arrays) {
    let result = [];
    for (let array of arrays) {
        for (let item of array) {
            result.push(item);
        }
    }
    return result;
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
exports.Car = Car;
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    return value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let mostExpensive = products[0];
    for (let product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (exports.Day = Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
