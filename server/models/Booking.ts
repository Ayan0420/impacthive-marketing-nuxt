import mongoose, { Schema, Document, Model } from 'mongoose'

export type ServiceType = 'web-development' | 'social-media'

export interface IBooking extends Document {
  name: string
  email: string
  service: ServiceType
  date: Date
  notes?: string
}

const BookingSchema: Schema<IBooking> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  service: { type: String, enum: ['web-development', 'social-media'], required: true },
  date: { type: Date, required: true, unique: true }, // no double bookings
  notes: { type: String },
})

export const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema)
