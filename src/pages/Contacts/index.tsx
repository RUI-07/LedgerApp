import React, {useEffect} from 'react'
import {View, ScrollView} from 'react-native'
import {autorun} from 'mobx'
import {observer, useLocalObservable} from 'mobx-react'
import {ContactsStore} from './store'
import {Button} from 'react-native-elements'
import {ContactsListItem} from './components/ContactsListItem'
import {useRealmHandle} from 'src/components/RealmProvider'

const Contacts = observer(() => {
  const realmHandle = useRealmHandle()
  const store = useLocalObservable(() => new ContactsStore())

  useEffect(() => {
    return autorun(async () => {
      await store.init(realmHandle)
      store.fetch()
    })
  }, [realmHandle, store])

  return (
    <View>
      <Button title="添加客户" onPress={() => store.create()} />
      <ScrollView>
        {store.contacts.map(item => (
          <ContactsListItem
            key={item._id.toHexString()}
            data={item}
            onDelete={id => store.remove(id)}
          />
        ))}
      </ScrollView>
    </View>
  )
})

export default Contacts
