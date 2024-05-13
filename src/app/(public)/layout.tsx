import React from "react"

import Header from "@/components/header"

type Props = { children: React.ReactNode }

const layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default layout
