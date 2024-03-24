import { gLocalStorage } from '../fileUtils/fileAPIFactory';

declare var window: any;
class RecordLocation {
  static recordCfi(bookKey: string, cfi: string, percentage: number) {
    let json = gLocalStorage.getItem("recordLocation");
    let obj = JSON.parse(json || "{}");
    obj[bookKey] = { cfi: cfi, percentage: percentage };
    gLocalStorage.setItem("recordLocation", JSON.stringify(obj));
  }

  static getCfi(bookKey: string) {
    let json = gLocalStorage.getItem("recordLocation");
    let obj = JSON.parse(json || "{}");
    return obj[bookKey] || {};
  }
  static recordHtmlLocation(
    bookKey: string,
    text: string,
    chapterTitle: string,
    chapterDocIndex: string,
    chapterHref: string,
    count: string,
    percentage: string,
    cfi: string,
    page: string
  ) {
    if (cfi) {
      let json = gLocalStorage.getItem("recordLocation");
      let obj = JSON.parse(json || "{}");
      obj[bookKey] = {
        text,
        chapterTitle,
        chapterDocIndex,
        chapterHref,
        count,
        percentage,
        cfi,
        page,
      };
      gLocalStorage.setItem("recordLocation", JSON.stringify(obj));
    } else {
      let json = gLocalStorage.getItem("recordLocation");
      let obj = JSON.parse(json || "{}");
      obj[bookKey] = {
        text,
        chapterTitle,
        chapterDocIndex,
        chapterHref,
        count,
        percentage,
        cfi,
        page,
      };
      gLocalStorage.setItem("recordLocation", JSON.stringify(obj));
    }
  }

  static getHtmlLocation(bookKey: string) {
    let json = gLocalStorage.getItem("recordLocation");
    let obj = JSON.parse(json || "{}");
    return obj[bookKey] || {};
  }
  static getPDFLocation(fingerprint: string) {
    let json = gLocalStorage.getItem("pdfjs.history");
    let arr = JSON.parse(json || "{}").files || [];
    let index = window._.findLastIndex(arr, { fingerprint });
    if (index > -1) {
      return arr[index] || {};
    } else {
      return {};
    }
  }
  static recordPDFLocation(fingerprint: string, obj: object) {
    let json = gLocalStorage.getItem("pdfjs.history");
    let _obj = JSON.parse(json || "{}");
    _obj.files[window._.findLastIndex(_obj.files, { fingerprint })] = obj;
    gLocalStorage.setItem("pdfjs.history", JSON.stringify(_obj));
  }
  static getAllCfi() {
    let json = gLocalStorage.getItem("recordLocation");
    let obj = JSON.parse(json || "{}");
    return obj;
  }
  static clear(bookKey: string) {
    let json = gLocalStorage.getItem("recordLocation");
    let obj = JSON.parse(json || "{}");
    delete obj[bookKey];
    gLocalStorage.setItem("recordLocation", JSON.stringify(obj));
  }
}

export default RecordLocation;
