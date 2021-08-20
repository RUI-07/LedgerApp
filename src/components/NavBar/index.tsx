import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native'

import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-native-fontawesome'
import {
  faFileInvoiceDollar,
  faEdit,
  faAddressBook,
  faHistory,
} from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  navBarItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

interface NavBarItemProps {
  icon: FontAwesomeIconProps['icon']
  text: string
  onPress?: () => void
}
const NavBarItem: React.FC<NavBarItemProps> = props => {
  const {icon, text, onPress} = props
  return (
    <TouchableHighlight style={styles.navBarItem} onPress={onPress}>
      <FontAwesomeIcon size={20} icon={icon} />
      <Text style={{fontSize: 16}}>{text}</Text>
    </TouchableHighlight>
  )
}

type NavTag = 'edit' | 'bookkeeping' | 'contacts' | 'history'
interface NavBarProps {
  onSwitch?: (tag: NavTag) => void
}
export const NavBar: React.FC<NavBarProps> = props => {
  return (
    <View style={styles.navBar}>
      <NavBarItem icon={faEdit} text="记账" />
      <NavBarItem icon={faFileInvoiceDollar} text="总账本" />
      <NavBarItem icon={faAddressBook} text="客户" />
      <NavBarItem icon={faHistory} text="交易查询" />
    </View>
  )
}
