import React from 'react'
import {
  Card,
  Column,
  Embed,
  Main,
  PageHeader,
  Section,
} from '@carletonuniversity/rds'
import ImageCover from '@/layouts/ImageCover/ImageCover'
import { NewsData } from '@/data/NewsData'
import Image from 'next/image'
import Link from 'next/link'

export default function AttendCarleton() {
  return (
    <ImageCover imageUrl="https://picsum.photos/id/516/1600/1200">
      <Section as="div" maxWidth="7xl">
        <PageHeader as="h2" header="Attend Carleton" size="md" />
        <Column cols="4" maxWidth="7xl">
          {NewsData.slice(0, 4).map(
            ({ id, link, title, date, image, alt, badge }) => (
              <Card noHover>
                <Card.ImageThumb>
                  <Image src={image} alt={alt} width="200" height="133" />
                </Card.ImageThumb>
                <Card.Header title={title} date={date} />
                <Card.Body>
                  <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
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
