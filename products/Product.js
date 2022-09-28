const mongoose = require("mongoose");

mongoose.model("Product", {
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
