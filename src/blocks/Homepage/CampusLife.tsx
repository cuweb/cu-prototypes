import React from 'react'
import { Section, PageHeader } from '@carletonuniversity/rds'
import PlaceHolder from '@/components/Placeholder/Placeholder'

export default function CampusLife() {
  return (
    <Section maxWidth="7xl">
      <PageHeader
        as="h1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
        header="Page Header"
        size="lg"
      />
      <PlaceHolder name="Campus Life" maxWidth="full" />
    </Section>
  )
}
