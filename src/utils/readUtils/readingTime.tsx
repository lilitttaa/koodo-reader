import { gLocalStorage } from '../fileUtils/fileAPIFactory';

class ReadingTime {
  static setTime(bookKey: string, time: number) {
    let json = gLocalStorage.getItem("readingTime");
    let obj = JSON.parse(json!) || {};
    obj[bookKey] = time;
    gLocalStorage.setItem("readingTime", JSON.stringify(obj));
  }

  static getTime(bookKey: string) {
    let json = gLocalStorage.getItem("readingTime");
    let obj = JSON.parse(json!) || {};
    return obj[bookKey] || 0;
  }
  static getAllTime() {
    let json = gLocalStorage.getItem("readingTime");
    let obj = JSON.parse(json!) || {};
    return obj || [];
  }
  static clearTime(bookKey: string) {
    let json = gLocalStorage.getItem("readingTime");
    let obj = JSON.parse(json!) || {};
    delete obj[bookKey];
    gLocalStorage.setItem("readingTime", JSON.stringify(obj));
  }
}

export default ReadingTime;
