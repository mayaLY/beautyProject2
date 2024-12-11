import {Schema, model} from 'mongoose';
import bcrypt from "bcrypt";

export const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName:{ type: String, required: true },
    userID: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    id: { type: String, required: true},
  });

  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });

  export const User = model("Client", userSchema);

  export default User;