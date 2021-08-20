import React, {
  useEffect,
  Suspense,
  lazy,
  ReactComponentElement,
  ReactElement,
  useState,
} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import {NavBar} from './components/NavBar'

import {
  FontAwesomeIcon,
  Props as FontAwesomeIconProps,
} from '@fortawesome/react-native-fontawesome'
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  app: {flex: 1, flexDirection: 'column', height: '100%'},
})

interface RouteConfig {
  path: string
  component: ReturnType<typeof lazy>
}
const routeConfig: RouteConfig[] = [
  {
    path: 'test',
    component: lazy(() => import('./pages/Test')),
  },
  {
    path: 'edit',
    component: lazy(() => import('./pages/Edit')),
  },
]

interface RouterViewProps {
  tag: string
}
const RouterView: React.FC<RouterViewProps> = props => {
  const {tag} = props
  const Page = routeConfig.find(item => item.path === tag)?.component
  return (
    <View style={{flex: 1}}>
      <Suspense fallback={null}>
        {Page ? <Page /> : <Text>not found</Text>}
      </Suspense>
    </View>
  )
}

const App = () => {
  const [pageTag, setPageTag] = useState('edit')

  return (
    <SafeAreaView style={styles.app}>
      <RouterView tag={pageTag} />
      <NavBar
        onSwitch={tag => {
          setPageTag(tag)
        }}
      />
    </SafeAreaView>
  )
}

export default App
