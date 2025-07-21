import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ...

// Test examples
console.log("Size:", list.size()); // 6
console.log("Head:", list.head().value); // dog
console.log("Tail:", list.tail().value); // turtle
console.log("At(2):", list.at(2)?.value); // parrot
console.log("Contains 'cat'?", list.contains("cat")); // true
console.log("Find 'hamster':", list.find("hamster")); // 3

list.insertAt("frog", 3);
console.log("After insertAt frog @ 3:", list.toString());

list.removeAt(2);
console.log("After removeAt 2:", list.toString());

list.pop();
console.log("After pop:", list.toString());
