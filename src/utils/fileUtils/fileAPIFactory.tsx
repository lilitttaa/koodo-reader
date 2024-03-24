import FileAPIInterface from './fileAPIInterface'
import LocalFileAPI from './localFileAPI'
import { LocalForageAPI } from './localForageAPI'
let fs = window.require('fs')
let path = window.require('path')

// class FileAPIFactory {
//   static create (): FileAPIInterface {
//     return
//   }
// }

class SyncFileAPI {
  dataPath: string
  dataFile: string
  constructor (dataPath: string) {
    this.dataPath = dataPath
    this.dataFile = path.join(dataPath, 'data.json')
  }

  public setItem (key: string, value: any): void {
    this.ensurePathExists(this.dataFile)
    const data = fs.readFileSync(this.dataFile, 'utf8')
    const jsonData = data ? JSON.parse(data) : {}
    jsonData[key] = value
    fs.writeFileSync(this.dataFile, JSON.stringify(jsonData, null, 2), 'utf8')
  }

  getItem (key: string): any {
    this.ensurePathExists(this.dataFile)
    const data = fs.readFileSync(this.dataFile, 'utf8')
    const jsonData = JSON.parse(data)
    return jsonData[key]
  }

  removeItem (key: string): void {
    this.ensurePathExists(this.dataFile)
    const data = fs.readFileSync(this.dataFile, 'utf8')
    const jsonData = JSON.parse(data)
    delete jsonData[key]
    fs.writeFileSync(this.dataFile, JSON.stringify(jsonData), 'utf8')
  }

  clear (): void {
    this.ensurePathExists(this.dataFile)
    fs.writeFileSync(this.dataFile, '{}', 'utf8')
  }

  private ensurePathExists (filePath: string): void {
    const directory = path.dirname(filePath)

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '{}', 'utf8')
    }
  }
}

const data = fs.readFileSync('userConfig.json', 'utf8')
var userConfig = JSON.parse(data)
export const storageLocation = userConfig.save_path
export let gLocalStorage = new SyncFileAPI(storageLocation + path.sep + 'localStorage')
export let gLocalForage = new LocalFileAPI(storageLocation + path.sep + 'localForage')
