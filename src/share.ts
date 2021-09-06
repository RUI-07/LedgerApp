import {lazy} from 'react'
import {Props as FontAwesomeIconProps} from '@fortawesome/react-native-fontawesome'
import {
  faFileInvoiceDollar,
  faEdit,
  faAddressBook,
  faHistory,
} from '@fortawesome/free-solid-svg-icons'

interface NavConfig {
  component: ReturnType<typeof lazy>
  icon: FontAwesomeIconProps['icon']
  title: string
  tag: string
}
export const navConfig: NavConfig[] = [
  {
    tag: 'bookeeping',
    component: lazy(() => import('src/pages/Edit')),
    title: '记账',
    icon: faEdit,
  },
  {
    tag: 'ledger',
    component: lazy(() => import('src/pages/Ledger')),
    title: '总账本',
    icon: faFileInvoiceDollar,
  },
  {
    tag: 'contacts',
    component: lazy(() => import('src/pages/Contacts')),
    title: '客户',
    icon: faAddressBook,
  },
  {
    tag: 'history',
    component: lazy(() => import('src/pages/History')),
    title: '交易查询',
    icon: faHistory,
  },
]

export const navBarHeight = 50
