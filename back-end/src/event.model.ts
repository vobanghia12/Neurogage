import { Schema, model, Types } from 'mongoose';

interface IEvent {
    userId: Types.ObjectId;
    timeStamp: Date;
    description: string;
}
  
const userSchema = new Schema<IEvent>({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    timeStamp: { type: Date, required: true },
    description: { type: String, required: true },
});
  
export const Event = model<IEvent>("events", userSchema);

