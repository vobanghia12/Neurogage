import { Schema, model } from 'mongoose';

interface ISession {
    timestamp: string;
    baseline: number;
    feedback: string;
}

interface IUser {
    name: string;
    isOnline: boolean;
    sessions: ISession[];
}
  
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    isOnline: { type: Boolean, required: true },
    sessions: [{
        baseline: { type: Number, required: true },
        timestamp: { type: String, required: true },
        feedback: { type: String, required: true },
    }]
});
  
export const User = model<IUser>("users", userSchema);