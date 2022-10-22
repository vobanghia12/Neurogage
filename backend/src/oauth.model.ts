import { Schema, model, Types } from 'mongoose';

interface IAuthenticate {
    username: string;
    password: string;
}
  
const oauthSchema = new Schema<IAuthenticate>({
    username: { type: String, required: true },
    password: { type: String, required: true },
});
  

  
export const Event = model<IAuthenticate>("IAuthenticate", oauthSchema);
