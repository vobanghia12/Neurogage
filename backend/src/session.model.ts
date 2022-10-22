import { Schema, model, Types } from 'mongoose';

interface ISession {
    userId: Types.ObjectId;
    timestamp: string;
    baseline: number;
    feedback: string;
}
  
const sessionSchema = new Schema<ISession>({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    timestamp: { type: String, required: true },
    baseline: { type: Number, required: true },
    feedback: { type: String, required: true }
});
  
export const Session = model<ISession>("sessions", sessionSchema);