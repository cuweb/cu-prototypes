'use client'
import { Body } from '@carletonuniversity/rds'

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <Body>{children}</Body>
}
