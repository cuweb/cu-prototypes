import React from 'react'
import { Column, Card, Section } from '@carletonuniversity/rds'

export default function HomeStats() {
  return (
    <Section as="div" isGrey>
      <Column cols="4" maxWidth="7xl">
        <Card leftBorder noHover>
          <Card.Stats
            desc="Scholarships and bursaries"
            stat="$31.9 million +"
          />
        </Card>
        <Card leftBorder noHover>
          <Card.Stats
            desc="Comprehensive universities"
            stat="Top 5 in Canada"
          />
        </Card>
        <Card leftBorder noHover>
          <Card.Stats desc="Programs offered" stat="Over 1,000" />
        </Card>
        <Card leftBorder noHover>
          <Card.Stats
            desc="Scholarships and bursaries"
            stat="$31.9 million +"
          />
        </Card>
      </Column>
    </Section>
  )
}
