export class MergeSort {
  sort(sampleArr: number[]): number[] {
    const arraySize: number = sampleArr.length;
    if (arraySize > 1) {
      const middleIndex = Math.trunc(arraySize / 2);
      let left: number[] = [];
      let right: number[] = [];
      for (let i = 0; i < middleIndex; i++) {
        left[i] = sampleArr[i];
      }

      for (let i = middleIndex; i < arraySize; i++) {
        right[i - middleIndex] = sampleArr[i];
      }

      this.sort(left);
      this.sort(right);
      this.merge(left, right, sampleArr);
      return sampleArr;
    }
  }

  merge(left: number[], right: number[], sampleArr: number[]): void {
    const leftSize = left.length;
    const rightSize = right.length;
    let l = 0;
    let r = 0;
    let k = 0;
    while (l < leftSize && r < rightSize) {
      if (left[l] <= right[r]) {
        sampleArr[k] = left[l];
        l++;
      } else if (left[l] >= right[r]) {
        sampleArr[k] = right[r];
        r++;
      }
      k++;
    }

    while (l < leftSize) {
      sampleArr[k] = left[l];
      l++;
      k++;
    }
    while (r < rightSize) {
      sampleArr[k] = right[r];
      r++;
      k++;
    }
  }
}
