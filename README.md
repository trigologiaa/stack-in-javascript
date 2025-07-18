# Stack - Generic Stack Implementation in JavaScript

A fully featured generic **Stack** implementation in JavaScript using a singly linked list.

This stack follows the **LIFO** (Last In, First Out) principle and supports common operations as well as useful utility methods for flexibility and convenience.

---

## Table of Contents

- [Stack - Generic Stack Implementation in JavaScript](#stack---generic-stack-implementation-in-javascript)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
  - [Running Tests](#running-tests)
  - [Design Notes](#design-notes)
  - [Example](#example)
  - [Author](#author)
  - [License](#license)
  - [Contact](#contact)

---

## Features

- Generic: works with any type (`Stack<T>`)
- Core stack operations:
  - `push(value)` — push an element onto the stack
  - `top()` — remove and return the top element (equivalent to `pop`)
  - `peek()` — return (without removing) the top element
  - `isEmpty()` — check if the stack is empty
  - `size()` — number of elements in the stack
- Iterable: supports iteration from top to bottom with `for...of`
- Utility methods:
  - `clear()` — empties the stack
  - `contains(value)` — checks if the stack contains a given element (supports `null`)
  - `popAll()` — removes all elements and returns them as an array (top element first)
  - `toArray()` — returns an array of elements in LIFO order
  - `clone()` — creates a shallow copy of the stack
  - `reverse()` — reverses the order of elements in the stack in-place
- Throws `Error` when calling `top()` or `peek()` on an empty stack
- Well documented with JSDoc comments

---

## Usage

```js
import { Stack } from './Stack.js';

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // Output: 30

while (!stack.isEmpty()) {
  console.log(stack.top());  // Pops and prints: 30, 20, 10
}
```

---

## Running Tests

Unit tests are included using [Jest](https://jestjs.io/).

To run the tests:

1. Install dependencies:

```bash
npm install
```

2. Run tests:

```bash
npm test
```

All tests cover normal operations, edge cases (empty stack, `null` elements), and utility methods.

---

## Design Notes

- Implemented with a singly linked list (`Node<T>`) for dynamic size and efficient push/pop operations.
- The iterator returns elements from top to bottom.
- Supports `null` elements safely in methods like `contains()`.
- The `clone()` method creates a shallow copy preserving element order.
- The `reverse()` method modifies the stack in-place reversing the element order.

---

## Example

```js
import { Stack } from './Stack.js';

const names = new Stack();
names.push("Alice");
names.push("Bob");
names.push("Charlie");

names.reverse();

for (const name of names) {
  console.log(name);
}
// Prints:
// Alice
// Bob
// Charlie
```

---

## Author

trigologiaa

---

## License

This project is released under the MIT License. Feel free to use, modify, and distribute.

---

## Contact

For questions or contributions, please open an issue or contact the author.