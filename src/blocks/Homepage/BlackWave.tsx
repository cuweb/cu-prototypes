import React from 'react'
import { ButtonGroup } from '@carletonuniversity/rds'
import WideWave from '@/layouts/WideWave/WideWave'
import Link from 'next/link'
import { TextMedia } from '@/components/TextMedia/TextMedia'

export default function BlackWave() {
  return (
    <WideWave wave="black">
      <TextMedia maxWidth="7xl" reverse>
        <TextMedia.Content
          title="Black Wave with Text & Media"
          width={40}
          hasUnderline
        >
          <p>
            The Wide Wave block has been created as a layout component and has
            the ability to switch between red and black, as well as the
            flexibility to use a variety of new or existing blocks inside of it,
            such as a refactored Text & Media block from RDS, formerly known as
            the Text & Image component.
          </p>
          <p>
            This black wave example uses the previous background image media
            column where the background image and uses a customized border. The
            image will automatically fill the space proportionally based on the
            height of the content column.
          </p>
          <ButtonGroup>
            <Link href="#" className="cu-button cu-button--red">
              Apply Now
            </Link>
            <Link href="#" className="cu-button cu-button--white">
              More Information
            </Link>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.BgImage
          imageUrl="https://picsum.photos/id/516/600/400"
          border="lg"
        />
      </TextMedia>
    </WideWave>
  )
}
