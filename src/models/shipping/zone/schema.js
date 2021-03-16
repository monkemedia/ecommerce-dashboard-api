const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShippingZoneSchema = new Schema({
  store_hash: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  enabled: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
}, { versionKey: false })

module.exports = ShippingZoneSchema
