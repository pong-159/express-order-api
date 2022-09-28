const mongoose = require("mongoose");

mongoose.model("Order", {
  userId: {
    type: mongoose.SchemaTypes.ObjectID,
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.SchemaTypes.ObjectID,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    required: true,
  },
});
