import { merge } from './merge';

const collection_1 = [15, 10, 5];
const collection_2 = [1, 3, 9];
const collection_3 = [0, 4, 6];

console.log("--- Merge 3 Arrays Example ---");
const result = merge(collection_1, collection_2, collection_3);
console.log("Result:", result);