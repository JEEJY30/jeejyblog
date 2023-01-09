"use client"

import Link from 'next/link'
import React from 'react'

function ClientSideRoute({
  children, rout
}: {
  children: React.ReactNode
  rout: string
}) {
  return (
    <div>
      <Link href={rout}>{children}</Link>
    </div>
  )
}

export default ClientSideRoute