import React from 'react'
import {View, Text} from 'react-native'
import {ListItem, Avatar, Button} from 'react-native-elements'
import {Space} from 'src/components/Space'
import {Contacts} from 'src/types'

interface ContactsListItemProps {
  data: Contacts
  onEdit?: (id: Contacts['_id']) => void
  onDetail?: (id: Contacts['_id']) => void
  onDelete?: (id: Contacts['_id']) => void
}
export const ContactsListItem: React.FC<ContactsListItemProps> = props => {
  const {
    data: {_id, name},
    onEdit,
    onDetail,
    onDelete,
  } = props
  return (
    <ListItem bottomDivider>
      {
        <View>
          <Avatar
            rounded
            title={name.slice(0, 2).toUpperCase()}
            source={{uri: 'a'}}
          />
        </View>
      }
      <View style={{flex: 1}}>
        <Text>{name}</Text>
      </View>
      <Space size={8}>
        <Button onPress={() => onDetail?.(_id)} title="查结账" />
        <Button onPress={() => onEdit?.(_id)} title="修改" />
        <Button
          buttonStyle={{backgroundColor: 'red'}}
          onPress={() => onDelete?.(_id)}
          title="删除"
        />
      </Space>
    </ListItem>
  )
}
