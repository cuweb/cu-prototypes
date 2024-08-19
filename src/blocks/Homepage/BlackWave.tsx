import React from 'react'
import { ButtonGroup } from '@carletonuniversity/rds'
import WideWave from '@/layouts/WideWave/WideWave'
import Link from 'next/link'
import { TextMedia } from '@/components/TextMedia/TextMedia'

export default function BlackWave() {
  return (
    <WideWave wave="black" hasRaven>
      <TextMedia maxWidth="7xl" reverse>
        <TextMedia.Content
          title="Ravens Basketball to Open at Home October 25"
          width={40}
          hasUnderline
        >
          <p>
            The Carleton Ravens basketball program will open the 2024 schedule
            at home with a doubleheader against the Western Mustangs. The Ravens
            will play 7 of their 11 home games before the holiday break, closing
            out 2024 with a visit from the Gee-Gees on December 4. The 2024-25
            schedule features a few notable dates including a Sunday evening
            contest against York on November 10.
          </p>
          <ButtonGroup>
            <Link
              href="https://goravens.ca/2024/06/ravens-basketball-to-open-at-home-october-25/"
              className="cu-button cu-button--red"
            >
              Read more
            </Link>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.BgImage
          imageUrl="/assets/homepage/wave-ravens-basketball.jpg"
          border="lg"
        />
      </TextMedia>
    </WideWave>
  )
}
