import User, { type User as UserType } from "@/models/User"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { z } from "zod"

import dbConnect from "./db"

// import bcrypt from 'bcrypt'

const credentialSchema = z
  .object({ username: z.string().min(1).max(50), password: z.string().min(1) })
  .strict()
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(c, req) {
        try {
          const credentials = credentialSchema.parse(c)
          const { username, password } = credentials

          let doctor: (UserType & { _id: string }) | undefined | null
          await dbConnect()

          if (z.string().email().safeParse(username).success) {
            doctor = await User.findOne({ email: username })
          } else {
            doctor = await User.findOne({ username })
          }
          if (!doctor) return null
          // const comparPassword = await bcrypt.compare(password, doctor.password)
          // if(!comparPassword) return null
          if (doctor.password !== password) return null
          return {
            email: doctor.email,
            username: doctor.username,
            id: doctor._id,
          }
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...user, ...token }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },

  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
}
