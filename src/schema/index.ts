import {ObjectSchema} from 'realm'

const ContactsSchema: ObjectSchema = {
  name: 'Contacts',
  properties: {
    _id: 'objectId',
    name: 'string',
    firstDate: 'date',
  },
  primaryKey: '_id',
}

const GoodsSchema: ObjectSchema = {
  name: 'Goods',
  properties: {
    _id: 'objectId',
    name: 'string',
    unitPrice: 'date',
    unit: 'string',
  },
  primaryKey: '_id',
}

export const schemas = [ContactsSchema, GoodsSchema]
