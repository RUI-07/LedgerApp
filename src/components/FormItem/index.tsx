import React, {ReactElement} from 'react'
import {View, Text} from 'react-native'
import {ListItem} from 'react-native-elements'

type InputElementProps<T> = {
  value?: T
  onChange?: (value: T) => void
}

export interface FormItemProps<T> extends InputElementProps<T> {
  label?: string
  inputElement: ReactElement<InputElementProps<T>>
}
export function FormItem<T>(props: FormItemProps<T>) {
  const {label, inputElement: InputElement, value, onChange} = props
  return (
    <ListItem bottomDivider>
      <View>
        <Text>{label}</Text>
      </View>
      <View style={{flex: 1}}>
        {React.cloneElement(InputElement, {
          value,
          onChange,
        })}
      </View>
    </ListItem>
  )
}
