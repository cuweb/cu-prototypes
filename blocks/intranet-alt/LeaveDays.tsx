import React from 'react'
import { Card, Column } from '@carletonuniversity/rds'

import { LeaveData } from 'data/LeaveData'

export const LeaveDays = () => {
  return (
    <Column cols="4" maxWidth="7xl">
      {LeaveData.slice(0, 4).map(({ id, stat, desc }) => (
        <Card key={id} border="red" noLink>
          <Card.Content>
            <Card.Stats desc={desc} stat={stat} />
          </Card.Content>
        </Card>
      ))}
    </Column>
  )
}
