import mongoose from "mongoose"
mongoose.connect(process.env.MONGO_URL!)
mongoose.Promise = global.Promise

// export const connectDB = async () => {
//   try {
//     if (!process.env.MONGO_URL) throw new Error("No Mongo URI provided")
//     await mongoose.connect(process.env.MONGO_URL)
//     console.log("db connected")
//   } catch (error) {
//     console.log(`Error connecting to MongoDB: ${error}`)
//   }
// }
