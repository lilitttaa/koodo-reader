import { gLocalStorage } from '../fileUtils/fileAPIFactory';

class ThemeUtil {
  static setThemes(themeName: string) {
    let themeArr =
      gLocalStorage.getItem("themeColors") !== "{}" &&
      gLocalStorage.getItem("themeColors")
        ? JSON.parse(gLocalStorage.getItem("themeColors") || "")
        : [];
    const index = themeArr.indexOf(themeName);
    if (index > -1) {
      themeArr.splice(index, 1);
      themeArr.unshift(themeName);
    } else {
      themeArr.unshift(themeName);
    }

    gLocalStorage.setItem("themeColors", JSON.stringify(themeArr));
  }

  static clear(themeName: string) {
    let themeArr =
      gLocalStorage.getItem("themeColors") !== "{}" &&
      gLocalStorage.getItem("themeColors")
        ? JSON.parse(gLocalStorage.getItem("themeColors") || "")
        : [];
    const index = themeArr.indexOf(themeName);
    if (index > -1) {
      themeArr.splice(index, 1);
    }
    gLocalStorage.setItem("themeColors", JSON.stringify(themeArr));
  }
  static getAllThemes() {
    let themeArr =
      gLocalStorage.getItem("themeColors") !== "{}" &&
      gLocalStorage.getItem("themeColors")
        ? JSON.parse(gLocalStorage.getItem("themeColors") || "")
        : [];
    return themeArr || [];
  }
}

export default ThemeUtil;
