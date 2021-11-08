export class DynamicArray<String> {
  private data: any[];
  private initialCapacity: number;
  private size: number;

  constructor(initialCapacity: number) {
    this.initialCapacity = initialCapacity;
    this.data = new Object[this.initialCapacity]();
  }

  get(index: number): string {
    return this.data[index].toString();
  }

  set(index: number, element: string): void {
    this.data[index] = element;
  }

  insert(index: number, element: string): void {
    //resize
    if (this.initialCapacity === index) {
      this.resize();
    }
    //copy
    for (let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    //insert
    this.data[index] = element;
  }

  resize(): void {
    const newData = new Object[this.initialCapacity * 2]();
    for (let i = 0; i < this.initialCapacity; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.initialCapacity = this.initialCapacity * 2;
  }

  delete(index: number): void {
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.size;
  }

  arraySize(): number {
    return this.size;
  }
}
