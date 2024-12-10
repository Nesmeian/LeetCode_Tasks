class RandomizedSet {
  constructor() {
    this.valueIndex = new Map();
    this.value = [];
  }
  insert(value) {
    if (this.valueIndex.has(value)) {
      return false;
    }
    this.valueIndex.set(value, this.value.length);
    this.value.push(value);
    return true;
  }
  remove(value) {
    if (!this.valueIndex.has(value)) {
      return false;
    }
    const index = this.valueIndex.get(value);
    const lasVal = this.value[this.value.length - 1];
    this.value[index] = lasVal;
    this.valueIndex.set(lasVal, index);
    this.value.pop();
    this.valueIndex.delete(value);
    return true;
  }
  getRandom() {
    const random = Math.floor(Math.random() * this.value.length);
    return this.value[random];
  }
}
