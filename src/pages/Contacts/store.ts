import Realm, {BSON} from 'realm'
import {ContactsSchema} from 'src/schema'
import {DePromise} from 'src/util/DePromise'
import {Contacts} from 'src/types'

export class ContactsStore {
  private realm: DePromise<ReturnType<typeof Realm.open>> | undefined
  private realmContacts: Realm.Results<Contacts> | undefined
  contacts: Contacts[] = []

  async init() {
    // Realm.deleteFile({})
    this.realm = await Realm.open({
      schema: [ContactsSchema],
    })
    this.realmContacts = this.realm.objects('Contacts')
    return () => this.realm?.close()
  }

  createContacts() {
    if (this.realm) {
      this.realm.write(() => {
        this.realm?.create('Contacts', {
          _id: new BSON.ObjectID(),
          name: 'test' + Math.floor(Math.random() * 10000),
          firstDate: new Date(),
        })
      })
      this.fetchContacts()
    }
  }

  fetchContacts() {
    this.contacts = this.realmContacts?.map(item => item) || []
  }
}
