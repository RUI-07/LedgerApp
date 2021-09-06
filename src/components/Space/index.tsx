import React from 'react'
import {View, FlexStyle} from 'react-native'

interface SpaceProps {
  size: number
  directions?: FlexStyle['flexDirection']
}
export const Space: React.FC<SpaceProps> = props => {
  const {size, directions = 'row'} = props
  return (
    <View
      style={{display: 'flex', flexDirection: directions, marginRight: -size}}>
      {React.Children.map(props.children, child => (
        <View style={{marginRight: size}}>{child}</View>
      ))}
    </View>
  )
}
