TypeScript Interview Questions Blog
Hi! I'm learning TypeScript and wanted to share what I've learned about two important topics: the differences between interfaces and types, and how enums work in TypeScript. These are common interview questions, and I hope my explanations help other beginners like me!
What Are Some Differences Between Interfaces and Types in TypeScript?
When I started learning TypeScript, I was confused about interfaces and types. They both let you define the shape of objects, but they have some differences. Let me break it down.
What They Have in Common
Both interfaces and types describe how an object should look. For example, I used an interface in my code to define a Product:
interface Product {
  name: string;
  price: number;
}

I could also write this using a type:
type Product = {
  name: string;
  price: number;
};

Both work the same way when I use them to type an object, like let item: Product = { name: "Pen", price: 10 };.
Key Differences
Here’s what I learned about how they’re different:

Extending Them:

Interfaces can be extended using the extends keyword. For example, if I want a DiscountedProduct that adds a discount property, I can do:interface DiscountedProduct extends Product {
  discount: number;
}


Types can’t use extends, but you can combine them using intersection (&). Like this:type DiscountedProduct = Product & { discount: number };

The intersection feels a bit trickier to me as a beginner.


Merging:

If I define the same interface twice, TypeScript combines them. For example:interface User {
  name: string;
}
interface User {
  age: number;
}

Now User has both name and age. This is called declaration merging, and it’s super useful for adding properties later.
Types don’t do this. If I try to define the same type twice, TypeScript gives an error.


What They Can Do:

Types are more flexible because they can represent things like unions. For example:type ID = string | number;

I can’t do this with an interface.
Interfaces are mainly for objects, so they’re less flexible but clearer when you’re defining object shapes.



When to Use Them
From what I’ve read, interfaces are great for defining objects, especially if you might extend or merge them later. Types are better if you need unions or other complex types. In my project, I used an interface for Product because it was a simple object, and I liked how clean it looked.
What Is the Use of Enums in TypeScript? Provide an Example of a Numeric and String Enum
Enums in TypeScript are a way to define a set of named values. They’re like a list of options that make your code easier to read and safer. Instead of using random numbers or strings, you can use meaningful names.
Why Use Enums?
Enums help you avoid mistakes. For example, in my project, I needed to represent days of the week. Without an enum, I might use numbers like 0 for Monday, 1 for Tuesday, and so on, but it’s easy to mix them up. Enums give me names that are clear and TypeScript checks that I’m using them correctly.
Numeric Enum Example
Here’s an enum I used in my code for days of the week:
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

By default, TypeScript assigns numbers starting from 0. So Day.Monday is 0, Day.Tuesday is 1, and so on. I used this in a function to check if a day is a weekday or weekend:
function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Sunday)); // Output: "Weekend"

This made my code easier to understand because Day.Monday is clearer than just 0.
String Enum Example
You can also make enums with string values. For example, if I want to represent directions:
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

Now Direction.Up is the string "UP". I could use this in a game:
let playerMove: Direction = Direction.Right;
console.log(playerMove); // Output: "RIGHT"

String enums are great when you need specific string values, like for an API that expects "UP" instead of a number.
Why Enums Are Helpful
Enums make my code safer because TypeScript only lets me use the values I defined. If I try let day: Day = 999, TypeScript will complain. They also make my code more readable, which is important when I’m working on a team or revisiting my code later.
Conclusion
Learning about interfaces, types, and enums has helped me write better TypeScript code. Interfaces are great for defining object shapes, especially when you need to extend them, while types are more flexible for things like unions. Enums are perfect for when you have a fixed set of values, like days or directions, and they make your code clearer and safer. I’m still getting the hang of TypeScript, but these concepts are already making my projects easier to manage!

This blog is part of my TypeScript learning journey. Check out my solutions in allSolutions.ts for the code examples I worked on!
