const mongoose = require("mongoose");

const schema = mongoose.Schema({
  clock: {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  cars: {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  jewellery: {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  novel: {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  others: {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    images: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Products", schema);
