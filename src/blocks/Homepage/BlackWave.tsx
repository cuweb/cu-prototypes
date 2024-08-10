import React from 'react'
import { ButtonGroup } from '@carletonuniversity/rds'
import WideWave from '@/layouts/WideWave/WideWave'
import Link from 'next/link'
import { TextMedia } from '@/components/TextMedia/TextMedia'

export default function BlackWave() {
  return (
    <WideWave wave="black">
      <TextMedia maxWidth="7xl" reverse>
        <TextMedia.Content title="Wave Component in Black" width={40}>
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
            <Link href="#" className="cu-button cu-button--red">
              Apply Now
            </Link>
            <Link href="#" className="cu-button cu-button--white">
              More Information
            </Link>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.Aside>Img</TextMedia.Aside>
      </TextMedia>
    </WideWave>
  )
}
