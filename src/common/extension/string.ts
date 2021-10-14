String.prototype.format = function (...args: string[]): string {
  return this.replace(/\{(\d+)\}/g,
    function (m: any, i: string) {
      return args[i];
    });
}

String.prototype.contains = function (val: string, ignoreCase?: boolean): boolean {
  if (!!ignoreCase) {
    return this.toLowerCase().indexOf(val.toLowerCase()) !== -1;
  }
  return this.indexOf(val) !== -1;
}

String.prototype.isEmpty = function (): boolean {
  return this?.trim()?.length === 0;
}

String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
}

interface String {
  format(...args: string[]): string


  /**
   * 是否是一个空字符串
   * 注：忽略空格
   */
  isEmpty(): boolean

  /**
   * 判断字符串是否存在
   * @param val 判断是否存在的字符串
   * @param ignoreCase 忽略大小写
   */
  contains(val: string, ignoreCase?: boolean): boolean

  replaceAll(str1: string, str2: string): void
}
