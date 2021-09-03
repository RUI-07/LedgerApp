import {ObjectSchema} from 'realm'

export const ContactsSchema: ObjectSchema = {
  name: 'Contacts',
  properties: {
    _id: 'objectId',
    name: 'string',
    firstDate: 'date',
  },
  primaryKey: '_id',
}

export const GoodsSchema: ObjectSchema = {
  name: 'Goods',
  properties: {
    _id: 'objectId',
    name: 'string',
    unitPrice: 'date',
    unit: 'string',
  },
  primaryKey: '_id',
}
