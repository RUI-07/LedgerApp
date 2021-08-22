import React, {ReactElement, useState, useEffect} from 'react'
import {View, Text, Pressable} from 'react-native'
import {ListItem, Card, Divider, Button} from 'react-native-elements'
import {DateInput, DateInputAndReset} from 'src/components/DateInput'
import {FormItem} from 'src/components/FormItem'

const Edit = () => {
  return (
    <View>
      <FormItem label="交易日期" inputElement={<DateInputAndReset />} />
    </View>
  )
}

export default Edit
