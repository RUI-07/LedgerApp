import React, {
  createContext,
  useContext,
  useEffect,
  Suspense,
  ReactNode,
} from 'react'
import Realm from 'realm'
import {DePromise} from 'src/util/DePromise'
import {schemas} from 'src/schema'

export type RealmHandle = DePromise<ReturnType<typeof Realm.open>> | undefined
const realmContext = createContext<RealmHandle>(undefined)

async function realmInit() {
  // Realm.deleteFile({})
  const realm = await Realm.open({
    path: 'ledger',
    schema: schemas,
  })

  return realm
}

export function useRealmHandle() {
  return useContext(realmContext)
}

const AsycRealmProvider = React.lazy(async () => {
  const Provider = realmContext.Provider
  const realm = await realmInit()
  const Default = (props: {children: ReactNode}) => {
    useEffect(() => () => realm.close(), [])
    return <Provider value={realm}>{props.children}</Provider>
  }
  return {
    default: Default,
  }
})

export const RealmProvider: React.FC = props => {
  return (
    <Suspense fallback={null}>
      <AsycRealmProvider>{props.children}</AsycRealmProvider>
    </Suspense>
  )
}
