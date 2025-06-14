import { connectToDB } from '~/server/utils/mongoose'
import { Booking } from '~/server/models/Booking'

export default defineEventHandler(async () => {
  await connectToDB()
  const bookings = await Booking.find().sort({ date: 1 })
  return bookings
})
