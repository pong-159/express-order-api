import mongoose from "mongoose";

function convertToMongooseID(id) {
  let idObj = mongoose.Types.ObjectID(id);
  return idObj;
}

export default {
  convertToMongooseID,
};
