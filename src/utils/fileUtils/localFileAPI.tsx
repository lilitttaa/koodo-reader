import FileAPIInterface from './fileAPIInterface'
let fs = window.require('fs')
let path = window.require('path')

export default class LocalFileAPI implements FileAPIInterface {
  dataPath: string
  dataFile: string
  constructor (dataPath: string) {
    this.dataPath = dataPath
    this.dataFile = path.join(dataPath, 'data.json')
  }

  public setItem (key: string, value: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ensurePathExists(this.dataFile)
      fs.readFile(this.dataFile, 'utf8', (err, data) => {
        if (err) return reject(err)
        try {
          const jsonData = data ? JSON.parse(data) : {}
          jsonData[key] = value
          fs.writeFile(
            this.dataFile,
            JSON.stringify(jsonData, null, 2),
            'utf8',
            err => {
              if (err) return reject(err)
              resolve()
            }
          )
        } catch (e) {
          reject(e)
        }
      })
    })
  }

  getItem (
    key: string,
    callback?: (err: any, value: any) => void
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ensurePathExists(this.dataFile)
      console.log('this.dataFile', this.dataFile)
      fs.readFile(this.dataFile, 'utf8', (err, data) => {
        if (err) return reject(err)
        const jsonData = JSON.parse(data)
        resolve(jsonData[key] || null)
      })
    })
  }

  removeItem (key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ensurePathExists(this.dataFile)
      fs.readFile(this.dataFile, 'utf8', (err, data) => {
        if (err) return reject(err)
        try {
          const jsonData = data ? JSON.parse(data) : {}
          delete jsonData[key]
          fs.writeFile(
            this.dataFile,
            JSON.stringify(jsonData, null, 2),
            'utf8',
            err => {
              if (err) return reject(err)
              resolve()
            }
          )
        } catch (e) {
          reject(e)
        }
      })
    })
  }

  clear (): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.unlink(this.dataFile, err => {
        if (err) return reject(err)
        fs.writeFile(this.dataFile, JSON.stringify({}), 'utf8', err => {
          if (err) return reject(err)
          resolve()
        })
      })
    })
  }

  private ensurePathExists (filePath: string): void {
    console.log('filePath', filePath)
    const directory = path.dirname(filePath)
    console.log('directory', directory)

    // 检查目录是否存在，如果不存在，则创建目录
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }

    // 检查文件是否存在，如果不存在，则创建文件
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '{}', 'utf8')
    }
  }
}
