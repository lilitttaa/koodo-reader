import BookModel from "../../model/Book";
import { gLocalStorage } from '../fileUtils/fileAPIFactory';
class AddTrash {
  static setTrash(bookKey: string) {
    let bookArr =
      gLocalStorage.getItem("deletedBooks") !== "{}" &&
      gLocalStorage.getItem("deletedBooks")
        ? JSON.parse(gLocalStorage.getItem("deletedBooks") || "")
        : [];
    const index = bookArr.indexOf(bookKey);
    if (index > -1) {
      bookArr.splice(index, 1);
      bookArr.unshift(bookKey);
    } else {
      bookArr.unshift(bookKey);
    }

    gLocalStorage.setItem("deletedBooks", JSON.stringify(bookArr));
  }
  static setAllTrash(books: BookModel[]) {
    let bookArr: string[] = [];
    books.forEach((item) => {
      bookArr.push(item.key);
    });
    gLocalStorage.setItem("deletedBooks", JSON.stringify(bookArr));
  }
  static clear(bookKey: string) {
    let bookArr =
      gLocalStorage.getItem("deletedBooks") !== "{}" &&
      gLocalStorage.getItem("deletedBooks")
        ? JSON.parse(gLocalStorage.getItem("deletedBooks") || "")
        : [];
    const index = bookArr.indexOf(bookKey);
    if (index > -1) {
      bookArr.splice(index, 1);
    }
    gLocalStorage.setItem("deletedBooks", JSON.stringify(bookArr));
  }
  static getAllTrash() {
    let bookArr =
      gLocalStorage.getItem("deletedBooks") !== "{}" &&
      gLocalStorage.getItem("deletedBooks")
        ? JSON.parse(gLocalStorage.getItem("deletedBooks") || "")
        : [];
    return bookArr || [];
  }
}

export default AddTrash;
