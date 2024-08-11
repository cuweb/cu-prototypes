import React from 'react'
import Link from 'next/link'
import { ButtonGroup } from '@carletonuniversity/rds'
import { TextMedia } from '@/components/TextMedia/TextMedia'
import WideWave from '@/layouts/WideWave/WideWave'
import Image from 'next/image'

export default function RedWave() {
  return (
    <WideWave>
      <TextMedia maxWidth="7xl">
        <TextMedia.Content title="Wave Component in Red" width={60}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            ligula felis. Maecenas gravida venenatis condimentum. Nulla ex
            massa, ultrices iaculis ante sit amet, faucibus commodo justo. Donec
            lobortis, ex vel elementum facilisis, justo lorem molestie erat,
            mollis imperdiet neque arcu sit amet lacus. Cras non lorem
            pellentesque, facilisis risus nec, dictum augue. Duis tortor velit,
            egestas quis erat at, iaculis aliquam ipsum.
          </p>
          <p>
            Curabitur id nisi dapibus, dignissim metus id, vehicula erat. Donec
            accumsan finibus nisl, sed maximus justo imperdiet non. Aenean sed
            tellus feugiat, pharetra est vel, venenatis sapien.
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
            src="https://picsum.photos/id/431/300/200"
            alt="Presentation only"
            width="300"
            height="200"
          />
        </TextMedia.Aside>
      </TextMedia>
    </WideWave>
  )
}
