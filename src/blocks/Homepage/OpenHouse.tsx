import React from 'react'
import { Section, ButtonGroup, Button } from '@carletonuniversity/rds'
import CallOut from '@/components/CallOut/CallOut'

export default function OpenHouse() {
  return (
    <Section>
      <CallOut title="Fall Open House">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut porta
          magna. Fusce id viverra mi. Etiam mollis feugiat nisl, sit amet tempor
          ante scelerisque vitae. Proin non bibendum dolor.
        </p>
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button color="grey" title="Request Information" />
        </ButtonGroup>
      </CallOut>
    </Section>
  )
}
