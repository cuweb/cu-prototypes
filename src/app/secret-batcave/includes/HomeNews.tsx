import React from 'react'
import { Column, Card, Section, PageHeaders } from '@carletonuniversity/rds'
import { NewsData } from '@/data/NewsData'
import Image from 'next/image'

export default function HomeNews() {
  return (
    <Section as="div" maxWidth="7xl">
      <Column cols="4" maxWidth="7xl">
        {NewsData.slice(0, 4).map(({ id, link, title, image, alt }) => (
          <Card key={id}>
            <Card.Figure>
              <Image
                alt="Image alt text"
                height="200"
                src="https://picsum.photos/300/200"
                width="300"
              />
            </Card.Figure>
            <Card.Header title={title} />
            <Card.Body>
              <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst." />
            </Card.Body>
            <Card.Footer>
              <a
                href={link}
                className="cu-button cu-button--red cu-button--small"
              >
                More info
              </a>
            </Card.Footer>
          </Card>
        ))}
      </Column>
    </Section>
  )
}
