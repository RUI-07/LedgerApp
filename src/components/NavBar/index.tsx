import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {globalStoreSingle} from 'src/store/global'
import {observer} from 'mobx-react'
import {navConfig} from 'src/share'

import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-native-fontawesome'

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
  tag: string
}
const NavBarItem: React.FC<NavBarItemProps> = observer(props => {
  const {icon, text, tag} = props
  return (
    <TouchableOpacity
      style={styles.navBarItem}
      onPress={() => globalStoreSingle.switchPageTag(tag)}>
      <View style={styles.navBarItem}>
        <FontAwesomeIcon size={20} icon={icon} />
        <Text style={{fontSize: 16}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
})

export const NavBar: React.FC = () => {
  return (
    <View style={styles.navBar}>
      {navConfig.map(item => {
        return <NavBarItem tag={item.tag} icon={item.icon} text={item.title} />
      })}
    </View>
  )
}
