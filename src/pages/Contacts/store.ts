import Realm, {BSON} from 'realm'
import {ContactsSchema} from 'src/schema'
import {DePromise} from 'src/util/DePromise'
import {Contacts} from 'src/types'
import {makeAutoObservable} from 'mobx'

export class ContactsStore {
  private realm: DePromise<ReturnType<typeof Realm.open>> | undefined
  private realmContacts: Realm.Results<Contacts> | undefined
  contacts: Contacts[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    Realm.deleteFile({})
    this.realm = await Realm.open({
      schema: [ContactsSchema],
    })
    this.realmContacts = this.realm.objects('Contacts')
    return () => this.realm?.close()
  }

  create() {
    if (this.realm) {
      this.realm.write(() => {
        this.realm?.create('Contacts', {
          _id: new BSON.ObjectID(),
          name: 'test' + Math.floor(Math.random() * 10000),
          firstDate: new Date(),
        })
      })
      this.fetch()
    }
  }

  fetch() {
    this.contacts =
      this.realmContacts?.map(item => ({
        name: item.name,
        firstDate: item.firstDate,
        _id: item._id,
      })) || []
  }
}
