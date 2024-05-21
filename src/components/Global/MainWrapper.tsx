'use client'
import { Main } from '@carletonuniversity/rds'

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <Main>{children}</Main>
}
