import mongoose from "mongoose"
import { IUser } from "../interfaces/IUser"

const userSchema = new mongoose.Schema({
  nickname:{
    type: String,
    unique: true,
    require: true
  },
  password:{
    type: String,
    require: true,
  }
})

export default mongoose.model<IUser & mongoose.Document>("User", userSchema )