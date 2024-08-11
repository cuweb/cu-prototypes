import React from 'react'
import { Column, Card, Section } from '@carletonuniversity/rds'

export default function HomeStats() {
  return (
    <Section as="div" isGrey>
      <Column cols="4" maxWidth="7xl">
        <Card leftBorder noHover>
          <Card.Stats desc="Scholarships & bursaries" stat="$85.4 million +" />
        </Card>
        <Card leftBorder noHover>
          <Card.Stats desc="Research Funding" stat="$116 million +" />
        </Card>
        <Card leftBorder noHover>
          <Card.Stats desc="Undergraduate Students" stat="Over 25,000" />
        </Card>
        <Card leftBorder noHover>
          <Card.Stats desc="Graduate Students" stat="Over 5,000" />
        </Card>
      </Column>
    </Section>
  )
}
