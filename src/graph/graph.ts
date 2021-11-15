import { LinkedList } from "../linked-list/linked-list";

export class Graph {
  adj: LinkedList[] = [];

  constructor() {
    for (let i = 0; i <= 5; i++) {
      this.adj[i] = new LinkedList();
    }
  }

  addEdge(v: number, w: any) {
    this.adj[v].addFront(w);
  }

  getList() {
    return this.adj[1];
  }

  findSimilarConnection(s: number, skill: string) {
    // Mark all the vertices as not visited (false)
    let visited: boolean[] = [];

    // Create a queue for BFS
    let queue: LinkedList = new LinkedList();

    // Mark the current node as visited and enqueue it
    visited[s] = true;
    //console.log("queue " + s, visited[s]);
    queue.addFront(s);
    while (queue.getSize() != 0) {
      // Dequeue a vertex from queue and print it
      let s = queue.deleteLast();
      //console.log("dequeue " + s);
      let i = this.adj[s].head;
      while (i) {
        let n = i.data.id;
        if (!visited[n] && i.data.skill == skill) {
          visited[n] = true;
          //console.log("queue " + n, visited[n], i.data.name);
          console.log("Connection with same skill", n, i.data.name);
          queue.addFront(n);
        }
        i = i.next;
      }
    }
    //console.log("d", queue, queue.getSize());
  }
}
