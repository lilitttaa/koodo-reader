import FileAPIInterface from './fileAPIInterface'
declare var window: any

export class LocalForageAPI implements FileAPIInterface {
  setItem (key: string, value: any): Promise<void> {
    return new Promise(resolve => {
      window.localforage.setItem(key, value).then(() => {
        resolve()
      })
    })
  }

  getItem (key: string): Promise<any> {
    return new Promise(resolve => {
      window.localforage.getItem(key).then(value => {
        resolve(value)
      })
    })
  }

  removeItem (key: string): Promise<void> {
    return new Promise(resolve => {
      window.localforage.removeItem(key).then(() => {
        resolve()
      })
    })
  }

  clear (): Promise<void> {
    return new Promise(resolve => {
      window.localforage.clear().then(() => {
        resolve()
      })
    })
  }
}
