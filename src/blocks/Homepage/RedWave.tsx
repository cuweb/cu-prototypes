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
          title="Detecting Alzheimer's and Parkinson's Early: Researchers Create Non-Invasive Tool That Uses Saliva"
          width={50}
          hasUnderline
        >
          <p>
            Alzheimer&apos;s and Parkinson&apos;s are devastating
            neurodegenerative diseases, primarily seen in those over the age of
            65 and collectively affecting nearly one million Canadians. Where
            Parkinson&apos;s affects the part of the brain that controls
            movement, Alzheimer&apos;s targets memory and cognition. Both result
            in progressive cognitive and physical decline and eventually lead to
            the inability to function independently.
          </p>
          <ButtonGroup>
            <Link
              href="https://challenge.carleton.ca/parkinsons-alzheimers-early-detection/"
              className="cu-button cu-button--white"
            >
              Read more
            </Link>
          </ButtonGroup>
        </TextMedia.Content>
        <TextMedia.Aside align="center" border="lg" borderColor="white">
          <Image
            src="/assets/homepage/wave-elder-patient-care.jpg"
            alt="Presentation only"
            width="600"
            height="460"
          />
        </TextMedia.Aside>
      </TextMedia>
    </WideWave>
  )
}
