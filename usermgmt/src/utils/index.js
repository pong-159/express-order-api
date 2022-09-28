import mongoose from "mongoose";
import axios from "axios";
function convertToMongooseID(id) {
  let idObj = mongoose.Types.ObjectID(id);
  return idObj;
}

function fetchAPI(url, body = null) {
  if (body == null) {
    return axios.get(url);
  }
  return axios.post(url, body);
}

export default {
  convertToMongooseID,
  fetchAPI,
};
