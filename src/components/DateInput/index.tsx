import React, {useEffect} from 'react'
import {Text, Pressable, View} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import {useLocalObservable, observer} from 'mobx-react'
import dayjs from 'dayjs'
import {Button} from 'react-native-elements'

export const createStore = (parmas?: {defaultDate?: Date}) => ({
  visible: false,
  date: parmas?.defaultDate || new Date(),
  setDate(date: Date) {
    this.date = date
  },
  hide() {
    this.visible = false
  },
  show() {
    this.visible = true
  },
})

export interface DateInputProps {
  value?: Date
  onChange?: (value: Date) => void
  store?: ReturnType<typeof createStore>
}
export const DateInput: React.FC<DateInputProps> = observer(props => {
  const {value, onChange, store: outerStore} = props
  const store = useLocalObservable(() => {
    return outerStore || createStore({defaultDate: value})
  })

  // 同步内外value
  useEffect(() => {
    if (value) {
      store.date = value
    }
  }, [value, store])

  return (
    <>
      <Pressable onPress={() => store.show()}>
        <Text>{dayjs(store.date).format('YYYY-MM-DD')}</Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={store.visible}
        mode="date"
        onConfirm={newDate => {
          store.setDate(newDate)
          onChange?.(newDate)
          store.hide()
        }}
        onCancel={() => store.hide()}
      />
    </>
  )
})

export const DateInputAndReset: React.FC<Omit<DateInputProps, 'store'>> =
  observer(props => {
    const {value, onChange} = props
    const store = useLocalObservable(createStore)

    // 同步内外value
    useEffect(() => {
      if (value) {
        store.date = value
      }
    }, [value, store])

    useEffect(() => {
      onChange?.(store.date)
    }, [store.date, onChange])

    const setDateToYesterday = () => {
      store.setDate(dayjs().subtract(1, 'day').toDate())
    }
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DateInput store={store} />
        </View>
        <View style={{width: 100}}>
          <Button title="设置为昨天" onPress={setDateToYesterday} />
        </View>
      </View>
    )
  })
