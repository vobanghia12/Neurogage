import { Schema, model } from 'mongoose';

interface ISession {
    timestamp: string;
    feedback: string;
}

interface IUser {
    name: string;
    baseline: number;
    isOnline: boolean;
    sessions: ISession[];
}
  
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    baseline: { type: Number, required: true },
    isOnline: { type: Boolean, required: true },
    sessions: [{
        timestamp: { type: String, required: true },
        feedback: { type: String, required: true }
    }]
});
  
export const User = model<IUser>("users", userSchema);