import React from 'react'
import { Card, Column, Heading } from '@carletonuniversity/rds'
import { StatsData } from '../../../src/data/StatsData'

export const NumberStats = () => {
  return (
    <>
      <Heading text="By the Numbers" maxWidth="7xl" />
      <Column cols="3" maxWidth="7xl">
        {StatsData.slice(0, 6).map(({ id, stat, desc }) => (
          <Card key={id} noLink>
            <Card.Content>
              <Card.Stats desc={desc} stat={stat} />
            </Card.Content>
          </Card>
        ))}
      </Column>

      {/* <Heading text="Funding" maxWidth="7xl" />
      <Column cols="3" maxWidth="7xl">
        {StatsData.slice(8, 11).map(({ id, stat, desc }) => (
          <Card key={id} noLink>
            <Card.Content>
              <Card.Stats desc={desc} stat={stat} />
            </Card.Content>
          </Card>
        ))}
      </Column> */}
    </>
  )
}
