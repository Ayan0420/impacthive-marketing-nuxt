import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async (): Promise<void> => {
  if (isConnected) return

  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your-db-name')
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}
