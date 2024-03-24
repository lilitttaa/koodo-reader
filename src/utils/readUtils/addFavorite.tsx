import BookModel from "../../model/Book";
import { gLocalStorage } from '../fileUtils/fileAPIFactory';
class AddFavorite {
  static setFavorite(bookKey: string) {
    let bookArr =
      gLocalStorage.getItem("favoriteBooks") !== "{}" &&
      gLocalStorage.getItem("favoriteBooks")
        ? JSON.parse(gLocalStorage.getItem("favoriteBooks") || "")
        : [];
    const index = bookArr.indexOf(bookKey);
    if (index > -1) {
      bookArr.splice(index, 1);
      bookArr.unshift(bookKey);
    } else {
      bookArr.unshift(bookKey);
    }

    gLocalStorage.setItem("favoriteBooks", JSON.stringify(bookArr));
  }
  static setFavorites(books: BookModel[]) {
    let bookArr =
      gLocalStorage.getItem("favoriteBooks") !== "{}" &&
      gLocalStorage.getItem("favoriteBooks")
        ? JSON.parse(gLocalStorage.getItem("favoriteBooks") || "")
        : [];
    let bookKeys = books.map((item) => item.key);
    bookArr = [...new Set([...bookArr, ...bookKeys])];
    gLocalStorage.setItem("favoriteBooks", JSON.stringify(bookArr));
  }
  static setAllFavorite(books: BookModel[]) {
    let bookArr: string[] = [];
    books.forEach((item) => {
      bookArr.push(item.key);
    });
    gLocalStorage.setItem("favoriteBooks", JSON.stringify(bookArr));
  }
  static clear(bookKey: string) {
    let bookArr =
      gLocalStorage.getItem("favoriteBooks") !== "{}" &&
      gLocalStorage.getItem("favoriteBooks")
        ? JSON.parse(gLocalStorage.getItem("favoriteBooks") || "")
        : [];
    const index = bookArr.indexOf(bookKey);
    if (index > -1) {
      bookArr.splice(index, 1);
    }
    gLocalStorage.setItem("favoriteBooks", JSON.stringify(bookArr));
  }
  static getAllFavorite() {
    let bookArr =
      gLocalStorage.getItem("favoriteBooks") !== "{}" &&
      gLocalStorage.getItem("favoriteBooks")
        ? JSON.parse(gLocalStorage.getItem("favoriteBooks") || "")
        : [];
    return bookArr || [];
  }
}

export default AddFavorite;
