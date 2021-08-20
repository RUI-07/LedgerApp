import React, {Suspense} from 'react'
import {Text, View} from 'react-native'
import {navConfig} from 'src/share'

interface RouterViewProps {
  tag: string
}
export const RouteView: React.FC<RouterViewProps> = props => {
  const {tag} = props
  const Page = navConfig.find(item => item.tag === tag)?.component
  return (
    <View style={{flex: 1}}>
      <Suspense fallback={null}>
        {Page ? <Page /> : <Text>not found</Text>}
      </Suspense>
    </View>
  )
}
