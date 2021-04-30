import { Queue } from "./queue.js";

class RadixSort extends Queue {
  constructor(num) {
    super();
    this.BUCKET_NUM = num; // 10진수 정렬이므로 기수는 10이 되고 이는 Bucket의 크기가 됨.
    this.array = [];
  }

  init() {
    for (let i = 0; i < this.BUCKET_NUM; i++) {
      this.array.push(new Queue());
    }
  }

  sort(arr, num, maxLen) {
    let bi;
    let pos;
    let di;
    let divfac = 1;
    let radix;

    for (pos = 0; pos <= maxLen; pos++) {
      for (di = 0; di < num; di++) {
        radix = Math.floor((arr[di] / divfac) % 10);
        super.enqueue(arr[di], this.array[radix]);
        console.log(this.array[radix]);
      }

      for (bi = 0, di = 0; bi < this.BUCKET_NUM; bi++) {
        while (!super.isEmpty(this.array[bi])) {
          arr[di++] = super.dequeue(this.array[bi]);
        }
      }

      divfac *= 10;
    }
  }
}

(function init() {
  const arr = [13, 212, 14, 7141, 10987, 6, 15];

  const decimalRadix = new RadixSort(10);
  decimalRadix.init();
  decimalRadix.sort(arr, arr.length, 5);

  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
  }
})();
