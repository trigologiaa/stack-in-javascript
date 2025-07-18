/**
 * Represents a single node in a singly linked list.
 *
 * Each node contains a value and a reference to the next node in the list.
 *
 * This class is typically used as an internal building block for a Stack structure.
 *
 * @template T The type of the value stored in the node.
 *
 * @example
 * // Create a node containing the value 42 with no next node.
 * const node1 = new Node(42);
 *
 * @example
 *  // Create a chain of nodes: 1 -> 2 -> 3
 *  const node3 = new Node(3);
 *  const node2 = new Node(2, node3);
 *  const node1 = new Node(1, node2);
 */
export class Node {
	/**
	 * Creates a new Node.
	 *
	 * @param {T} value - The value to store in the node.
	 * @param {Node<T>|null} [next=null] - The reference to the next node in the
	 * list. If omitted, the next node is set to 'null'.
	 */
	constructor(value, next = null) {
		/**
		 * The value stored in the node.
		 *
		 * @type {T}
		 */
		this.value = value;

		/**
		 * The reference to the next node in the list.
		 *
		 * @type {Node<T>|null}
		 */
		this.next = next;
	}
}
