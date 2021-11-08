import { MergeSort } from "./merge-sort/merge-sort";

let mergeSort = new MergeSort();
const sampleArr: number[] = [89, 1, 8, 3, 6, 9, 10, 2];
//console.log(mergeSort.sort(sampleArr));

let itemList1: number[] = [2, 7, 5, 6];
let itemList2: number[] = [1, 7, 3, 2];

for (let i = 0; i < itemList1.length; i++) {
  itemList2[itemList1.length + i] = itemList1[i];
}

console.log('Problem Case', itemList2);
console.log('Solutions', mergeSort.sort(itemList2));
