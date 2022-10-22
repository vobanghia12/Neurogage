import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    isOnline: boolean;
}
  
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    isOnline: { type: Boolean, required: true }
});
  
export const User = model<IUser>("users", userSchema);