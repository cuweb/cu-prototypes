import React from 'react'
import {
  Column,
  Card,
  Section,
  BadgeGroup,
  Badge,
} from '@carletonuniversity/rds'

import { NewsData } from '@/data/NewsData'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeNews() {
  return (
    <Section as="div" maxWidth="7xl">
      <Column cols="4" maxWidth="7xl">
        {NewsData.slice(0, 4).map(
          ({ id, link, title, date, image, alt, excerpt, badge }) => (
            <Card key={id}>
              <Card.Figure>
                <BadgeGroup gap="2" isAbsolute top={10} left={10}>
                  <Badge color="black60" text={badge} rounded="lg" />
                </BadgeGroup>
                <Image src={image} alt={alt} width="300" height="200" />
              </Card.Figure>
              <Card.Header title={title} date={date} />
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
  )
}
