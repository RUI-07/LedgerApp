import {makeAutoObservable} from 'mobx'

class GlobalStore {
  constructor() {
    makeAutoObservable(this)
  }
  pageTag: string = 'edit'
  switchPageTag(tag: string) {
    this.pageTag = tag
  }
}

export const globalStoreSingle = new GlobalStore()
