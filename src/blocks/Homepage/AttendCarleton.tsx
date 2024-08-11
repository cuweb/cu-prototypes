import React from 'react'
import {
  Card,
  Column,
  Embed,
  PageHeader,
  Section,
} from '@carletonuniversity/rds'
import ImageCover from '@/layouts/ImageCover/ImageCover'
import { PromoData } from '@/data/PromoData'
import Image from 'next/image'
import Link from 'next/link'

export default function AttendCarleton() {
  return (
    <ImageCover imageUrl="https://picsum.photos/id/516/1600/1200">
      <Section as="div" maxWidth="7xl">
        <PageHeader as="h2" header="Attend Carleton" size="md" />
        <Column cols="4" maxWidth="7xl">
          {PromoData.slice(0, 4).map(
            ({ id, link, title, excerpt, image, alt }) => (
              <Card key={id} noHover>
                <Card.Figure>
                  <Image src={image} alt={alt} width="200" height="133" />
                </Card.Figure>
                <Card.Header title={title} />
                <Card.Body>
                  <Card.Excerpt text={excerpt} />
                </Card.Body>
                <Card.Footer>
                  <Link
                    href={link}
                    className="cu-button cu-button--red cu-button--small"
                  >
                    More info
                  </Link>
                </Card.Footer>
              </Card>
            ),
          )}
        </Column>
      </Section>
      <Section as="div" maxWidth="7xl">
        <Embed maxWidth="7xl">
          <Embed.YouTube
            title="test"
            url="https://www.youtube.com/watch?v=ZISHr6sPNCE"
          />
        </Embed>
      </Section>
    </ImageCover>
  )
}
