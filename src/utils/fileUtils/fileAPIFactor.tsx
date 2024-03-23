import FileAPIInterface from './fileAPIInterface'
import { LocalForageAPI } from './localForageAPI'

class FileAPIFactory {
  static create (): FileAPIInterface {
    return new LocalForageAPI()
  }
}

export let fileAPI = FileAPIFactory.create()
