Array.prototype.first = function <T>(predicate: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T {
  for (let i = 0; i < this.length; i++) {
    if (!!predicate(this[i], i, this)) {
      return this[i];
    }
  }
  return null;
};

interface Array<T> {
  first(predicate: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T;
}
