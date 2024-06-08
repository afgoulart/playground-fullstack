import { Document, model, Schema } from "mongoose";

/**
 * name: String
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export type TUser = {
  name: String
  email: string;
  password: string;
  avatar: string;
};

/**
 * IUser
 * @param name:string
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export interface IUser extends TUser, Document { }

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

/**
 * TUser
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

const User = model<IUser>("User", userSchema);

export default User;
