import { gLocalStorage } from '../fileUtils/fileAPIFactory';

class TagUtil {
  static setTags(tagName: string) {
    let tagArr =
      gLocalStorage.getItem("noteTags") !== "{}" &&
      gLocalStorage.getItem("noteTags")
        ? JSON.parse(gLocalStorage.getItem("noteTags") || "")
        : [];
    const index = tagArr.indexOf(tagName);
    if (index > -1) {
      tagArr.splice(index, 1);
      tagArr.unshift(tagName);
    } else {
      tagArr.unshift(tagName);
    }

    gLocalStorage.setItem("noteTags", JSON.stringify(tagArr));
  }

  static clear(tagName: string) {
    let tagArr =
      gLocalStorage.getItem("noteTags") !== "{}" &&
      gLocalStorage.getItem("noteTags")
        ? JSON.parse(gLocalStorage.getItem("noteTags") || "")
        : [];
    const index = tagArr.indexOf(tagName);
    if (index > -1) {
      tagArr.splice(index, 1);
    }
    gLocalStorage.setItem("noteTags", JSON.stringify(tagArr));
  }
  static getAllTags() {
    let tagArr =
      gLocalStorage.getItem("noteTags") !== "{}" &&
      gLocalStorage.getItem("noteTags")
        ? JSON.parse(gLocalStorage.getItem("noteTags") || "")
        : [];
    return tagArr || [];
  }
}

export default TagUtil;
