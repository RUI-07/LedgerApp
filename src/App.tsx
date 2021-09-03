import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {NavBar} from 'src/components/NavBar'
import {RouteView} from 'src/components/RouteView'
import {observer} from 'mobx-react'
import {globalStoreSingle} from 'src/store/global'
import {RealmProvider} from 'src/components/RealmProvider'

const styles = StyleSheet.create({
  app: {flex: 1, flexDirection: 'column', height: '100%'},
})

const App = observer(() => {
  return (
    <RealmProvider>
      <SafeAreaView style={styles.app}>
        <RouteView tag={globalStoreSingle.pageTag} />
        <NavBar />
      </SafeAreaView>
    </RealmProvider>
  )
})

export default App
