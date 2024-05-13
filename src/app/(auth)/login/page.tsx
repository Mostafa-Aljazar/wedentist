import React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/next-auth"
import LoginForm from "@/components/login/login-form"

type Props = {}

const page = async (props: Props) => {
  const session = await getServerSession(authOptions)

  if (session) redirect(`/${session.user.username}/dashboard`)
  return <LoginForm />
}

export default page
