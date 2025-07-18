import { Stack } from './Stack';

let stack;

function setup() {
  stack = new Stack();
}

function testPushAndPeekValues() {
  stack.push(10);
  stack.push(20);
  expect(stack.peek()).toBe(20);
  expect(stack.size()).toBe(2);
}

function testRemoveAndReturnTopValue() {
  stack.push(1);
  stack.push(2);
  const value = stack.top();
  expect(value).toBe(2);
  expect(stack.size()).toBe(1);
  expect(stack.peek()).toBe(1);
}

function testIsEmptyReturnsTrueWhenEmpty() {
  expect(stack.isEmpty()).toBe(true);
  stack.push(5);
  expect(stack.isEmpty()).toBe(false);
}

function testClearRemovesAllElements() {
  stack.push(1);
  stack.push(2);
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
  expect(stack.size()).toBe(0);
}

function testContainsWorksCorrectly() {
  stack.push("A");
  stack.push("B");
  expect(stack.contains("A")).toBe(true);
  expect(stack.contains("C")).toBe(false);
}

function testToArrayReturnsElementsInOrder() {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.toArray()).toEqual([3, 2, 1]);
}

function testCloneCreatesDeepCopy() {
  stack.push(100);
  stack.push(200);
  const clone = stack.clone();
  expect(clone.toArray()).toEqual([200, 100]);
  clone.push(300);
  expect(stack.size()).toBe(2);
  expect(clone.size()).toBe(3);
}

function testReverseReversesStack() {
  stack.push("X");
  stack.push("Y");
  stack.push("Z");
  stack.reverse();
  expect(stack.toArray()).toEqual(["X", "Y", "Z"]);
}

function testPopAllReturnsAllElementsAndClears() {
  stack.push(7);
  stack.push(8);
  const values = stack.popAll();
  expect(values).toEqual([8, 7]);
  expect(stack.isEmpty()).toBe(true);
}

function testIteratorYieldsElements() {
  stack.push(1);
  stack.push(2);
  stack.push(3);
  const result = [];
  for (const val of stack) {
    result.push(val);
  }
  expect(result).toEqual([3, 2, 1]);
}

function callTop() {
  return stack.top();
}

function callPeek() {
  return stack.peek();
}

function testTopAndPeekThrowWhenEmpty() {
  expect(callTop).toThrow("empty stack");
  expect(callPeek).toThrow("empty stack");
}

function runStackTests() {
  beforeEach(setup);
  test('should push and peek values', testPushAndPeekValues);
  test('should remove and return top value with top()', testRemoveAndReturnTopValue);
  test('should return true when stack is empty', testIsEmptyReturnsTrueWhenEmpty);
  test('should clear all elements', testClearRemovesAllElements);
  test('should check if value exists in stack', testContainsWorksCorrectly);
  test('should convert stack to array', testToArrayReturnsElementsInOrder);
  test('should clone the stack', testCloneCreatesDeepCopy);
  test('should reverse the stack', testReverseReversesStack);
  test('should popAll and clear the stack', testPopAllReturnsAllElementsAndClears);
  test('should iterate over stack elements', testIteratorYieldsElements);
  test('should throw error when top or peek on empty stack', testTopAndPeekThrowWhenEmpty);
}

describe('Stack', runStackTests);