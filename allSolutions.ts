export function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

export function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let result = [];
  for (let item of items) {
    if (item.rating >= 4) {
      result.push(item);
    }
  }
  return result;
}

export function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (let array of arrays) {
    for (let item of array) {
      result.push(item);
    }
  }
  return result;
}

export class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

export class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

export function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }
  return value * 2;
}

export interface Product {
  name: string;
  price: number;
}

export function getMostExpensiveProduct(products: Product[]): Product | null {
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

export enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

export async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
