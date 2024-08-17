import React from 'react'
import Link from 'next/link'
import { ButtonGroup } from '@carletonuniversity/rds'
import { TextMedia } from '@/components/TextMedia/TextMedia'
import WideWave from '@/layouts/WideWave/WideWave'
import Image from 'next/image'

export default function RedWave() {
  return (
    <WideWave hasRaven>
      <TextMedia maxWidth="7xl">
        <TextMedia.Content
          title="Red Wave with Text & Media"
          width={60}
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
            The new Text & Media component used inside Wide Wave carries over
            all the features of the original component, such as a customizable
            content width while adding more flexibility in the accompanying
            media column. There are currently two media column options, one is a
            previously existing option, a background image that matches the
            height of the content. A new option allows for embedding other forms
            of media such as set width images or videos, with vertical aligment
            options.
          </p>
          <p>
            This red wave example uses the new embedded option with an image
            that is vertically centered and uses a customized border.
          </p>
          <ButtonGroup>
            <Link href="#" className="cu-button cu-button--white">
              Apply Now
            </Link>
            <Link href="#" className="cu-button cu-button--black">
              More Information
            </Link>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.Aside align="center" border="lg" borderColor="white">
          <Image
            src="https://picsum.photos/id/431/600/460"
            alt="Presentation only"
            width="600"
            height="460"
          />
        </TextMedia.Aside>
      </TextMedia>
    </WideWave>
  )
}
