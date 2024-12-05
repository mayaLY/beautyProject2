import {Schema, model} from 'mongoose';


export const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userID: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  });

  module.exports = mongoose.model("User", userSchema);
