const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storeSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  first_name: {
    type: String,
    required: false
  },
  last_name: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  country_code: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  admin_email: {
    type: String,
    required: false
  },
  order_email: {
    type: String,
    required: false
  },
  is_price_entered_with_tax: {
    type: Boolean,
    required: false
  },
  tax_label: {
    type: String,
    required: false
  },
  tax_percentage: {
    type: Number,
    default: 0
  },
  language: {
    type: String,
    required: false
  },
  currency_code: {
    type: String,
    required: false
  }
}, { versionKey: false })

module.exports = storeSchema