import Realm, {BSON} from 'realm'
import {DePromise} from 'src/util/DePromise'
import {Contacts} from 'src/types'
import {makeAutoObservable} from 'mobx'
import {RealmHandle} from 'src/components/RealmProvider'

export class ContactsStore {
  realm: DePromise<ReturnType<typeof Realm.open>> | undefined
  realmContacts: Realm.Results<Contacts> | undefined
  contacts: Contacts[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async init(realm: RealmHandle) {
    this.realm = realm
    this.realmContacts = this.realm?.objects('Contacts')
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

  remove(targetId: BSON.ObjectId) {
    if (this.realm) {
      const target = this.realmContacts?.find(item => item._id.equals(targetId))
      target &&
        this.realm.write(() => {
          this.realm?.delete(target)
        })
      this.fetch()
    }
  }
}
