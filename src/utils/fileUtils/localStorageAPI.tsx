import FileAPIInterface from './fileAPIInterface'

export class gLocalStorageAPI implements FileAPIInterface {
	setItem (key: string, value: any): Promise<void> {
	  return new Promise(resolve => {
		localStorage.setItem(key, value)
		resolve()
	  })
	}
  
	getItem (key: string): Promise<any> {
	  return new Promise(resolve => {
		resolve(localStorage.getItem(key))
	  })
	}
  
	removeItem (key: string): Promise<void> {
	  return new Promise(resolve => {
		localStorage.removeItem(key)
		resolve()
	  })
	}
  
	clear (): Promise<void> {
	  return new Promise(resolve => {
		localStorage.clear()
		resolve()
	  })
	}
  }
  
  