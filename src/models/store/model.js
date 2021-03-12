const mongoose = require('mongoose')
const StoreSchema = require('./schema.js')

// Update store
StoreSchema.statics.updateStore = async (data, store_hash) => {
  const store = await Store.findOneAndUpdate({ store_hash }, {
    ...data,
    updated_at: Date.now()
  }, { upsert: true })
  return store
}

const Store = mongoose.model('Store', StoreSchema)

module.exports = Store
