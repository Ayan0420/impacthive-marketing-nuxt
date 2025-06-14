import { connectToDB } from '~/server/utils/mongoose'
import { Booking } from '~/server/models/Booking'

export default defineEventHandler(async (event) => {
  await connectToDB()
  const body = await readBody(event)

  const { name, email, service, date, notes } = body

  // Optional: check for duplicate slots
  const existing = await Booking.findOne({ date })
  if (existing) {
    throw createError({ statusCode: 409, statusMessage: 'Slot already booked' })
  }

  const booking = await Booking.create({ name, email, service, date, notes })
  return booking
})
