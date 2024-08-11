'use client'
import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Main, LinkProvider, Nav, ButtonGroup } from '@carletonuniversity/rds'
import { HomeNav } from '../../data/HomepageNav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinkProvider type={Link}>
        <Nav navType="primary">
          <Nav.Logo link="/homepage" />
          <Nav.Primary>
            {/* <span className="hidden md:block">
              <Nav.Menu menu={HomeNav} />
            </span> */}
            <Nav.Aside>
              <button aria-label="search" className="not-prose">
                <MagnifyingGlassIcon
                  className="w-5 h-5 cursor-pointer text-cu-black-300 left-4"
                  aria-hidden="true"
                />
              </button>
              <ButtonGroup>
                <Link
                  href="#"
                  className="cu-button cu-button--red cu-button--small "
                >
                  Apply
                </Link>
                <Link
                  href="#"
                  className="cu-button cu-button--black cu-button--small "
                >
                  Donate
                </Link>
              </ButtonGroup>
            </Nav.Aside>
          </Nav.Primary>
        </Nav>
      </LinkProvider>
      <Main>{children}</Main>
    </>
  )
}
