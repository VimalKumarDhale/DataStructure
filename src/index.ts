/** Merge Sort */
// import { MergeSort } from "./merge-sort/merge-sort";

// let mergeSort = new MergeSort();
// const sampleArr: number[] = [89, 1, 8, 3, 6, 9, 10, 2];
// console.log(mergeSort.sort(sampleArr));

// let itemList1: number[] = [2, 7, 5, 6];
// let itemList2: number[] = [1, 7, 3, 2];

// for (let i = 0; i < itemList1.length; i++) {
//   itemList2[itemList1.length + i] = itemList1[i];
// }

// console.log("Problem Case", itemList2);
// console.log("Solutions", mergeSort.sort(itemList2));

/** Graph */
/**
Adjacency list
a-> b,c,e
b-> a,f,e
c-> a,f
d-> b,f,e   3-> 1,4,5
e-> b,a,d
f-> c,b,d

->a -------- c<-
- |            -   
- |            -   
- |            -   
- b----------d -
- |-        -| -
- |  -    -  | -
- |    -     | -
-> c  -   -  f<-

 */

import { Graph } from "./graph/graph";
const graph: Graph = new Graph();

// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// graph.addEdge(0, 3);

// graph.addEdge(1, 0);
// graph.addEdge(1, 5);
// graph.addEdge(1, 4);

// graph.addEdge(2, 0);
// graph.addEdge(2, 5);

// graph.addEdge(3, 1);
// graph.addEdge(3, 5);
// graph.addEdge(3, 4);

// graph.addEdge(4, 1);
// graph.addEdge(4, 0);
// graph.addEdge(4, 3);

// graph.addEdge(5, 2);
// graph.addEdge(5, 1);
// graph.addEdge(5, 3);

//----------------------------
/** Graph */
/**
Adjacency list
a,0: Smith
b,1: Max
c,2: Sam
d,3: Don
e,4: Villy
f,5: Johny

0-> 1,2,4
1-> 0,5,4
2-> 0,5
3-> 1,5,4   3-> 1,4,5
4-> 1,0,3
5-> 2,1,3

 */
graph.addEdge(0, { id: 1, name: "Max", age: 28, skill: "Angular" });
graph.addEdge(0, { id: 2, name: "Sam", age: 18 });
graph.addEdge(0, { id: 4, name: "Villy", age: 14, skill: "Angular" });

graph.addEdge(1, { id: 0, name: "Smith", age: 31, skill: "Angular" });
graph.addEdge(1, { id: 5, name: "Johny", age: 22, skill: "React" });
graph.addEdge(1, { id: 4, name: "Villy", age: 14, skill: "Angular" });

graph.addEdge(2, { id: 0, name: "Smith", age: 31, skill: "Angular" });
graph.addEdge(2, { id: 5, name: "Johny", age: 22, skill: "React" });

graph.addEdge(3, { id: 1, name: "Max", age: 28, skill: "Angular" });
graph.addEdge(3, { id: 5, name: "Johny", age: 22, skill: "React" });
graph.addEdge(3, { id: 4, name: "Villy", age: 14, skill: "Angular" });

graph.addEdge(4, { id: 1, name: "Max", age: 28, skill: "Angular" });
graph.addEdge(4, { id: 0, name: "Smith", age: 31, skill: "Angular" });
graph.addEdge(4, { id: 3, name: "Don", age: 14, skill: "Angular" });

graph.addEdge(5, { id: 2, name: "Sam", age: 18 });
graph.addEdge(5, { id: 1, name: "Max", age: 28, skill: "Angular" });
graph.addEdge(5, { id: 3, name: "Don", age: 14, skill: "Angular" });

//console.log(graph.getList(), graph.getList().head.next);
graph.findSimilarConnection(4, "Angular");
