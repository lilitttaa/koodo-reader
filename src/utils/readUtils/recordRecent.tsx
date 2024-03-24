import BookModel from "../../model/Book";
import { gLocalStorage } from '../fileUtils/fileAPIFactory';
class RecordRecent {
  static setRecent(bookKey: string) {
    let bookArr =
      gLocalStorage.getItem("recentBooks") !== "{}" &&
      gLocalStorage.getItem("recentBooks")
        ? JSON.parse(gLocalStorage.getItem("recentBooks") || "")
        : [];
    const index = bookArr.indexOf(bookKey);
    if (index > -1) {
      bookArr.splice(index, 1);
      bookArr.unshift(bookKey);
    } else {
      bookArr.unshift(bookKey);
    }

    gLocalStorage.setItem("recentBooks", JSON.stringify(bookArr));
  }
  static setAllRecent(books: BookModel[]) {
    let bookArr: string[] = [];
    books.forEach((item) => {
      bookArr.push(item.key);
    });
    gLocalStorage.setItem("recentBooks", JSON.stringify(bookArr));
  }

  static clear(bookKey: string) {
    let bookArr =
      gLocalStorage.getItem("recentBooks") !== "{}" &&
      gLocalStorage.getItem("recentBooks")
        ? JSON.parse(gLocalStorage.getItem("recentBooks") || "")
        : [];
    const index = bookArr.indexOf(bookKey);
    if (index > -1) {
      bookArr.splice(index, 1);
    }
    gLocalStorage.setItem("recentBooks", JSON.stringify(bookArr));
  }
  static getAllRecent() {
    let bookArr =
      gLocalStorage.getItem("recentBooks") !== "{}" &&
      gLocalStorage.getItem("recentBooks")
        ? JSON.parse(gLocalStorage.getItem("recentBooks") || "")
        : [];
    return bookArr || [];
  }
}

export default RecordRecent;
