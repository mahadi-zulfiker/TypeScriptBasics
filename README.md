My TypeScript Learning Journey: Interfaces, Types, and Enums
============================================================

Welcome to my TypeScript blog! As part of my journey to learn TypeScript, I’ve been working on a project (check out `allSolutions.ts` in this repository) and exploring key concepts. In this post, I’ll dive into two common TypeScript interview questions:

*   **What are the differences between interfaces and types in TypeScript?**
*   **What is the use of enums in TypeScript, with examples of numeric and string enums?**

> _I’m still a beginner, so I’ll explain these in a simple, clear way to help other learners. Let’s get started!_

* * *

🎯 Differences Between Interfaces and Types in TypeScript
---------------------------------------------------------

When I first started with TypeScript, I was confused about interfaces and types. They both seem to define how objects look, but they have different uses. Let’s break it down with examples from my project.

### 📘 What Are They?

**Interfaces** define the shape of an object, like a blueprint. In my `allSolutions.ts`, I used an interface for a `Product`:

    interface Product {
      name: string;
      price: number;
    }

This says a Product must have a name (string) and price (number).

Types do the same but are more flexible. I could write the Product as a type:

    type Product = {
      name: string;
      price: number;
    };

Both work for typing an object like:

    let item: Product = { name: "Pen", price: 10 };

### 🔍 Key Differences

**✅ Extending**

Interfaces use the `extends` keyword:

    interface DiscountedProduct extends Product {
      discount: number;
    }

Types use intersections (`&`):

    type DiscountedProduct = Product & { discount: number };

As a beginner, I find `extends` easier to read.

**🖁 Declaration Merging**

Interfaces can be defined multiple times, and TypeScript merges them:

    interface User {
      name: string;
    }
    interface User {
      age: number;
    }
    // User now has both 'name' and 'age'

Types don’t merge. If I define `type User` twice, TypeScript throws an error.

**🔄 Flexibility**

Types can handle more than just objects, like unions:

    type ID = string | number;

Interfaces can’t do this. They're mainly for object shapes.

### 🛠 When to Use Them?

In my project, I used an interface for `Product` because it’s a simple object, and interfaces feel clean for that. If I needed a union (`string | number`), I’d use a type.

From what I’ve read:

*   Use **interfaces** for object structures you might extend.
*   Use **types** for unions, intersections, or more complex combinations.

🧹 What Are Enums in TypeScript? (Numeric and String Examples)
--------------------------------------------------------------

Enums (short for "enumerations") are a TypeScript feature that let you define a set of named values. They make your code safer and easier to read by replacing magic numbers or strings with meaningful names.

### 🧠 Why Use Enums?

In my project, I needed to handle days of the week. Without enums, I might use numbers (e.g., 0 for Monday), but that’s confusing and error-prone.

### 🔢 Numeric Enum Example

    enum Day {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    }

TypeScript assigns numbers starting from 0 (`Day.Monday` is 0, `Day.Tuesday` is 1, etc.). Here’s how I used it:

    function getDayType(day: Day): string {
      if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
      }
      return "Weekday";
    }
    
    console.log(getDayType(Day.Monday));  // "Weekday"
    console.log(getDayType(Day.Sunday));  // "Weekend"

Using `Day.Monday` is way clearer than `0`, and TypeScript catches invalid values like `999`.

### 🔤 String Enum Example

For specific values, like directions in a game, string enums are helpful:

    enum Direction {
      Up = "UP",
      Down = "DOWN",
      Left = "LEFT",
      Right = "RIGHT"
    }
    
    let move: Direction = Direction.Right;
    console.log(move);  // "RIGHT"

This ensures `move` can only be "UP", "DOWN", "LEFT", or "RIGHT".

### 💡 Why Enums Are Awesome

*   ✅ **Readability**: `Day.Monday` is clearer than `0`.
*   🔒 **Safety**: TypeScript restricts values to the enum.
*   ♻️ **Reusability**: I can use `Day` across functions like `getDayType`.

In my project, the `Day` enum made logic easier to understand, especially for checking weekdays vs. weekends.

✅ Wrapping Up
-------------

Learning about interfaces, types, and enums has been a game-changer for my TypeScript skills:

*   🧱 **Interfaces** help define object shapes cleanly and extendably.
*   🧹 **Types** offer flexibility for unions, primitives, and intersections.
*   🐠 **Enums** give meaningful names to values, making code safe and readable.

These concepts helped me write better code in `allSolutions.ts` and will make future projects easier to maintain.

Thanks for reading my blog!  
👉 Check out my code in `allSolutions.ts` to see these concepts in action.  
I’m excited to keep learning TypeScript and sharing what I discover!

📚 This blog is part of my TypeScript assignment. All code and explanations are my own, based on my learning experience.