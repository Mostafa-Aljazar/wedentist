import React from "react"

type Props = {}

const TopBar = (props: Props) => {
  return (
    <header className="bg-background fixed left-0 right-14 top-0 z-10 flex h-[57px] items-center gap-1 border-b px-4">
      <h1 className="text-xl font-semibold">wedentis</h1>
    </header>
  )
}

export default TopBar
