'use client'
import React from 'react'
import { LinkProvider, Nav } from '@carletonuniversity/rds'
import Link from 'next/link'

export default function Navigation() {
  return (
    <>
      <LinkProvider type={Link}>
        <Nav navType="primary">
          <Nav.Logo
            title="Project Prototypes"
            link="https://carleton.ca/webservices"
          />
        </Nav>
      </LinkProvider>
    </>
  )
}
