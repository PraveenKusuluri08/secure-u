import React from "react"
import type { Metadata } from "next"

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication Pages",
}

function layout({ children }: Props) {
  return <>{children}</>
}

export default layout
