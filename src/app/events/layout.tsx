'use client'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import {
  Main,
  LinkProvider,
  Nav,
  Section,
  PageHeader,
  SearchInput,
} from '@carletonuniversity/rds'
import { SearchData } from '../../data/SearchData'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [, setOpen] = useState(false)

  const callback = useCallback(
    (itemOpen: boolean) => {
      setOpen(itemOpen)
    },
    [setOpen],
  )

  return (
    <>
      <LinkProvider type={Link}>
        <Nav navType="primary">
          <Nav.Logo title="Events Calendar" link="/events" />
          <Nav.Primary>
            <Nav.Aside LoggedOutUser={true}>
              <SearchInput
                callback={() => {}}
                placeholder="Enter a search string"
              />
            </Nav.Aside>
          </Nav.Primary>
        </Nav>
      </LinkProvider>
      <Main>
        <Section>{children}</Section>
      </Main>
    </>
  )
}
