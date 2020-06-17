const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shippingZoneSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
  free_shipping: {
    type: Boolean,
    default: false
  },
  enabled: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

module.exports = shippingZoneSchema