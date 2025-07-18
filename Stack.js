import { Node } from "./Node";

/**
 * Represents a generic stack (LIFO - Last In, First Out) implementation using a
 * singly linked list as the underlying storage.
 *
 * This stack supports typical operations such as {@link push}, {@link top},
 * {@link peek}, {@link size}, {@link isEmpty}, and provides utility methods like
 * {@link clear}, {@link contains}, {@link toArray}, {@link clone},
 * {@link reverse}, and {@link popAll}.
 *
 * @template T The type of elements stored in the stack.
 *
 * @example
 * const stack = new Stack();
 * stack.push(10);
 * stack.push(20);
 * console.log(stack.peek()); // 20
 * console.log(stack.top()); // 20
 * console.log(stack.toArray()); // [10]
 */
export class Stack {
	/**
	 * Creates a new empty stack.
	 */
	constructor() {
		/**
		 * The top node of the stack.
		 *
		 * @type {Node<T>|null}
		 *
		 * @private
		 */
		this.head = null;

		/**
		 * The number of elements in the stack.
		 *
		 * @type {number}
		 *
		 * @private
		 */
		this._size = 0;
	}

	/**
	 * Pushes a new element onto the top of the stack.
	 *
	 * @param {T} value - The value to push onto the stack.
	 *
	 * @returns {void}
	 */
	push(value) {
		const newNode = new Node(value, this.head);
		this.head = newNode;
		this._size++;
	}

	/**
	 * Removes and returns the element at the top of the stack.
	 *
	 * @returns {T} The value at the top of the stack.
	 *
	 * @throws {Error} If the stack is empty.
	 */
	top() {
		if (this.isEmpty()) {
			throw new Error("empty stack");
		}
		const value = this.head.value;
		this.head = this.head.next;
		this._size--;
		return value;
	}

	/**
	 * Returns the element at the top of the stack without removing it.
	 *
	 * @returns {T} The value at the top of the stack.
	 *
	 * @throws {Error} If the stack is empty.
	 */
	peek() {
		if (this.isEmpty()) {
			throw new Error("empty stack");
		}
		return this.head.value;
	}

	/**
	 * Returns the number of elements in the stack.
	 *
	 * @returns {number} The size of the stack.
	 */
	size() {
		return this._size;
	}

	/**
	 * Checks whether the stack is empty.
	 *
	 * @returns {number} true if the stack is empty; otherwise, false.
	 */
	isEmpty() {
		return this.size() === 0;
	}

	/**
	 * Removes all elements from the stack.
	 *
	 * @returns {void}
	 */
	clear() {
		this.head = null;
		this._size = 0;
	}

	/**
	 * Determines whether the stack contains a given value.
	 *
	 * @param {T} value - The value to search for.
	 *
	 * @returns {boolean} true if the value is found; otherwise, false.
	 */
	contains(value) {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	/**
	 * Returns an array containing all elements in the stack, with the top element
	 * first.
	 *
	 * @returns {T[]} An array of the stack's elements.
	 */
	toArray() {
		const array = [];
		let current = this.head;
		while (current) {
			array.push(current.value);
			current = current.next;
		}
		return array;
	}

	/**
	 * Creates a deep copy of the stack.
	 *
	 * @returns {Stack<T>} A new stack containing the same elements.
	 */
	clone() {
		const clonedStack = new Stack();
		const values = this.toArray().reverse();
		for (const value of values) {
			clonedStack.push(value);
		}
		return clonedStack;
	}

	/**
	 * Reverses the order of elements in the stack in-place.
	 *
	 * @returns {void}
	 */
	reverse() {
		let prev = null;
		let current = this.head;
		while (current) {
			const next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		this.head = prev;
	}

	/**
	 * Removes all elements from the stack and returns them as an array
	 * (top element first).
	 *
	 * @returns {T[]} An array of all elements previously in the stack.
	 */
	popAll() {
		const array = this.toArray();
		this.clear();
		return array;
	}

	/**
	 * Returns an iterator that yields each element in the stack from top to bottom.
	 *
	 * @returns {Iterator<T>}
	 *
	 * @example
	 * const stack = new Stack();
	 * stack.push("A");
	 * stack.push("B");
	 * for (const item of stack) {
	 *   console.log(item); // "B", then "A"
	 * }
	 */
	*[Symbol.iterator]() {
		let current = this.head;
		while (current) {
			yield current.value;
			current = current.next;
		}
	}
}
