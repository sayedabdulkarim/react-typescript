const mongoose = require('mongoose')

const schema = mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  edit: {
    type: Boolean,
    required: true
  },
  deleted: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

const User = mongoose.model('expenseeves', schema)

module.exports = User