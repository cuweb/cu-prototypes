'use client'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { Main, LinkProvider, Nav, SearchInput } from '@carletonuniversity/rds'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import { SearchData } from '../../data/SearchData'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <LinkProvider type={Link}>
        <Nav navType="primary">
          <Nav.Logo title="Events Calendar" link="/events" />
          <Nav.Primary>
            <Nav.Aside LoggedOutUser={true}>
              <button
                onClick={() => setModalOpen(true)}
                aria-label="search"
                className="not-prose"
              >
                <MagnifyingGlassIcon
                  className="w-5 h-5 cursor-pointer text-cu-black-300 left-4"
                  aria-hidden="true"
                />
              </button>
            </Nav.Aside>
          </Nav.Primary>
        </Nav>
      </LinkProvider>
      <Main>{children}</Main>
    </>
  )
}
