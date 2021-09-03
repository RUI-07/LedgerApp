import React, {useEffect} from 'react'
import {View, Text, ScrollView} from 'react-native'
import {toJS} from 'mobx'
import {observer, useLocalObservable} from 'mobx-react'
import {ContactsStore} from './store'
import {Button} from 'react-native-elements'
import {ContactsListItem} from './components/ContactsListItem'

const Contacts = observer(() => {
  const store = useLocalObservable(() => new ContactsStore())

  useEffect(() => {
    const disposalPromise = store.init()
    store.fetch()
    return () => {
      disposalPromise.then(func => func())
    }
  }, [store])

  return (
    <View>
      <Button title="添加客户" onPress={() => store.create()} />
      <ScrollView>
        {store.contacts.map(item => (
          <ContactsListItem
            key={item._id.toHexString()}
            id={item._id + ''}
            name={item.name}
          />
        ))}
      </ScrollView>
    </View>
  )
})

export default Contacts
