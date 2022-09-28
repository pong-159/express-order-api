import mongoose from "mongoose";

export default mongoose.model("Product", {
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});
