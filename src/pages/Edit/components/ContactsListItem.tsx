import React from 'react'
import {View, Text} from 'react-native'
import {ListItem, Avatar, Button} from 'react-native-elements'

interface ContactsListItemProps {
  id: string
  name: string
  avatar?: string
  onEdit?: (id: string) => void
  onDetail?: (id: string) => void
}
export const ContactsListItem: React.FC<ContactsListItemProps> = props => {
  const {id, name, avatar, onEdit, onDetail} = props
  return (
    <ListItem bottomDivider>
      <View>
        <Avatar
          rounded
          title={name.slice(0, 2).toUpperCase()}
          source={{uri: avatar || 'a'}}
        />
      </View>
      <View style={{flex: 1}}>
        <Text>{name}</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{marginRight: 8}}>
          <Button onPress={() => onDetail?.(id)} title="查结账" />
        </View>
        <Button onPress={() => onEdit?.(id)} title="修改" />
      </View>
    </ListItem>
  )
}
