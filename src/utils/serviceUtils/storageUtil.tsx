import { gLocalStorage } from '../fileUtils/fileAPIFactory';

class StorageUtil {
  static getReaderConfig(key: string) {
	console.log('gLocalStorage', gLocalStorage,gLocalStorage.getItem("readerConfig")!)
    let readerConfig = JSON.parse(gLocalStorage.getItem("readerConfig")!) || {};
    return readerConfig[key];
  }

  static setReaderConfig(key: string, value: string) {
    let readerConfig = JSON.parse(gLocalStorage.getItem("readerConfig")!) || {};
    readerConfig[key] = value;
    gLocalStorage.setItem("readerConfig", JSON.stringify(readerConfig));
  }
  static getKookitConfig(key: string) {
    let kookitConfig = JSON.parse(gLocalStorage.getItem("kookitConfig")!) || {};
    return kookitConfig[key];
  }

  static setKookitConfig(key: string, value: string) {
    let kookitConfig = JSON.parse(gLocalStorage.getItem("kookitConfig")!) || {};
    kookitConfig[key] = value;
    gLocalStorage.setItem("kookitConfig", JSON.stringify(kookitConfig));
  }
}

export default StorageUtil;
