interface Object {
  /**
   * 转换对象属性到目标对象上
   * @param target 目标对象
   */
  Convert<T>(target: T): T
}

Object.prototype.Convert = function Convert<T>(target: T): T {
  for (const key in this) {
    const item = this[key];
    target[key] = item;
  }
  return target;
}