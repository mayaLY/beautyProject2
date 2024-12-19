import {Schema, model} from 'mongoose';
import bcrypt from "bcrypt";
import crypto from 'crypto';


export const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userID: {
    type: String,
    unique: true,
    required: true,
    default: () => crypto.randomBytes(8).toString('hex'), 
  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  id: {
    type: String,
    unique: true,
    required: true,
    default: () => crypto.randomBytes(12).toString('hex'),
  },
});

  

  export const User = model("Client", userSchema);

  export default User;