import { Schema, model, Types } from 'mongoose';

interface IEvent {
    userId: Types.ObjectId;
    eventId: string;
    timeStamp: string;
    description: string;
}
  
const userSchema = new Schema<IEvent>({
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    eventId: { type: String, required: true },
    timeStamp: { type: String, required: true },
    description: { type: String, required: true },
});
  
export const Event = model<IEvent>("events", userSchema);

