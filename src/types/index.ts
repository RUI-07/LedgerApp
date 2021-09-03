import {ObjectID} from 'bson'

export interface Contacts {
  _id: ObjectID
  name: string
  firstDate: Date
}

export interface Goods {
  _id: ObjectID
  name: string
  unitPrice: Date
  unit: string
}
