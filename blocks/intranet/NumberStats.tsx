import React from 'react'
import { Card, Column, Heading } from '@carletonuniversity/rds'
import { StatsData } from '../../data/StatsData'

export const NumberStats = () => {
  return (
    <>
      <Heading text="By the Numbers" maxWidth="7xl" />
      <Column cols="4" maxWidth="7xl">
        {StatsData.slice(0, 4).map(({ id, stat, desc }) => (
          <Card key={id} border="red" noLink>
            <Card.Content>
              <Card.Stats desc={desc} stat={stat} />
            </Card.Content>
          </Card>
        ))}
      </Column>
    </>
  )
}
