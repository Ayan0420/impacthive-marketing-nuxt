import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IAvailableSlot extends Document {
  service: 'web-development' | 'social-media'
  date: Date
  booked: boolean
}

const SlotSchema: Schema<IAvailableSlot> = new Schema({
  service: { type: String, enum: ['web-development', 'social-media'], required: true },
  date: { type: Date, required: true, unique: true },
  booked: { type: Boolean, default: false },
})

export const AvailableSlot: Model<IAvailableSlot> =
  mongoose.models.AvailableSlot || mongoose.model<IAvailableSlot>('AvailableSlot', SlotSchema)
