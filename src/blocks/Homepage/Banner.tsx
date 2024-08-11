import React from 'react'
import { ButtonGroup, Button } from '@carletonuniversity/rds'
import FullBanner from '@/components/FullBanner/FullBanner'

export default function Banner() {
  return (
    <FullBanner
      title="The nostalgia is real. The launch of the iPod revolutionized how the world consumes music on the move!"
      image="https://picsum.photos/id/20/1600/700"
      opacity={75}
    >
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button color="grey" title="Request Information" />
      </ButtonGroup>
    </FullBanner>
  )
}
