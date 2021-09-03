import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import {observer, useLocalObservable} from 'mobx-react'
import {ContactsStore} from './store'
import {Button} from 'react-native-elements'
import {ContactsListItem} from './components/ContactsListItem'

const Contacts = observer(() => {
  const store = useLocalObservable(() => new ContactsStore())

  useEffect(() => {
    const disposalPromise = store.init()
    return () => {
      disposalPromise.then(func => func())
    }
  }, [store])

  return (
    <View>
      <Button title="添加客户" onPress={() => store.createContacts()} />
      {store.contacts.map(item => (
        <ContactsListItem id={item._id + ''} name={item.name} />
      ))}
    </View>
  )
})

export default Contacts
