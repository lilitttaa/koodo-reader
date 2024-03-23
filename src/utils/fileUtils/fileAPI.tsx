import fs from 'fs'

import path from 'path'
import FileAPIInterface from './fileAPIInterface'
export default class FileAPI implements FileAPIInterface {
  dataPath: string
  dataFile: string
  constructor (dataPath: string) {
    this.dataPath = dataPath
    this.dataFile = path.join(dataPath, 'data.json')
  }

  public setItem (key: string, value: any): Promise<void> {
    return new Promise((resolve, reject) => {
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

  getItem (key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dataFile, 'utf8', (err, data) => {
        if (err) return reject(err)
        const jsonData = JSON.parse(data)
        resolve(jsonData[key])
      })
    })
  }

  removeItem (key: string): Promise<void> {
    return new Promise((resolve, reject) => {
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
}
