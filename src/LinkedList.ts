import OrderBy from './OrderBy';

class Node {
  next: Node | null = null;
  data: number;

  constructor(data: number) {
    this.data = data;
  }
}

class LinkedList extends OrderBy {
  collection: any;
  head: Node | null = null;

  constructor() {
    super();
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  // TODO
  
  // public set data(collection : number) {
  //   this.data = this.collection;
  // }
  // let cek: any = this.data;

  sortAscending(): void{
    let dataContains = [];

    if (!this.head){
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      dataContains.push(node.data);
      node = node.next;
    }

    this.collection = dataContains;
    this.ascending();
    this.head = null;

    for (let i = 0; i < dataContains.length; i++){
      this.add(dataContains[i]);
    }
  }

  sortDescending(): void{
    let dataContains = [];

    if (!this.head){
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      dataContains.push(node.data);
      node = node.next;
    }

    this.collection = dataContains;
    this.descending();
    this.head = null;

    for (let i = 0; i < dataContains.length; i++){
      this.add(dataContains[i]);
    }
  }



  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    let res = [];
    while (node) {
      res.push(node.data);
      node = node.next;
    }

    console.log(res.join(" -> "));
  }
}

export default LinkedList;
