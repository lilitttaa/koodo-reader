export default interface FileAPIInterface {
  setItem(key: string, value: any): Promise<void>
  getItem(key: string): Promise<any>
  removeItem(key: string): Promise<void>
  clear(): Promise<void>
}
