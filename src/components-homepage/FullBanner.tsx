import React from 'react'
import { WideImage, ButtonGroup, Button } from '@carletonuniversity/rds'

export default function FullBanner() {
  return (
    <WideImage
      image="https://picsum.photos/1600/700"
      headerType="h1"
      isType="image"
      title="Wide image with bg image"
    >
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus.
      </p>
      <ButtonGroup>
        <Button title="Apply Now" />
        <Button color="grey" title="Request Information" />
      </ButtonGroup>
    </WideImage>
  )
}
