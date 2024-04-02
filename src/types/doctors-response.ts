export type DoctorResponse = {
  doctors: Doctor[]
}

export type Doctor = {
  id: number
  slug: string
  personalInformation: PersonalInformation
  skills: string[]
}

export type PersonalInformation = {
  name: string
  specialization: string
  location: string
  contact: Contact
}

export type Contact = {
  phoneNumber: string
  email: string
  socialMedia: SocialMedia[]
}

export type SocialMedia = {
  id: number
  platform: string
  user: string
  link: string
}
