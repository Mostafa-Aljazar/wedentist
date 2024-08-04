import mongoose, { model, Schema } from "mongoose"

export type SocialMedia = {
  id: number
  platform: string
  user: string
  link: string
}
export type Contact = {
  phoneNumber: string
  email: string
  socialMedia: SocialMedia[]
}
export type PersonalInformation = {
  name: string
  specialization: string
  location: string
  contact: Contact
}
export type Education = {
  year: string
  course: string
  uni: string
  location: string
  GAP: string
}
export interface Doctor {
  image: string
  slug: string
  personalInformation: PersonalInformation
  skills: string[]
  introduction: string
  education: Education
}
// SocialMedia Schema
export const socialMediaSchema = new Schema<SocialMedia>({
  platform: { type: String, required: true },
  user: { type: String, required: true },
  link: { type: String, required: true },
})

// Contact Schema
export const contactSchema = new Schema<Contact>({
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  socialMedia: [socialMediaSchema],
})

// PersonalInformation Schema
export const personalInformationSchema = new Schema<PersonalInformation>({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: contactSchema, required: true },
})

// Education Schema
export const educationSchema = new Schema<Education>({
  year: { type: String, required: true },
  course: { type: String, required: true },
  uni: { type: String, required: true },
  location: { type: String, required: true },
  GAP: String,
})

// Doctor Schema
export const doctorSchema = new Schema<Doctor>(
  {
    image: {
      type: String,
      require,
    },
    slug: { type: String, required: true, unique: true },
    personalInformation: { type: personalInformationSchema, required: true },
    skills: [{ type: String, required: true }],
    introduction: { type: String, required: true },
    education: { type: educationSchema, required: true },
  },
  { timestamps: true },
)

const Doctor =
  (mongoose.models.Doctor as mongoose.Model<
    Doctor,
    {},
    {},
    {},
    mongoose.Document<unknown, {}, Doctor> &
      Doctor & {
        _id: mongoose.Types.ObjectId
      },
    any
  >) || model<Doctor>("Doctor", doctorSchema)

export default Doctor
