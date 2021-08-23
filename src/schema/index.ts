import {ObjectSchema} from 'realm'

export const Contacts: ObjectSchema = {
  name: 'Contacts',
  properties: {
    _id: 'int',
    name: 'string',
    firstDate: 'date',
  },
  primaryKey: '_id',
}

export const Goods: ObjectSchema = {
  name: 'Goods',
  properties: {
    _id: 'int',
    name: 'string',
    unitPrice: 'date',
    unit: 'string',
  },
  primaryKey: '_id',
}
