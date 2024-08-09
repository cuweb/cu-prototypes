import React from 'react'
import { Column, Card, Section } from '@carletonuniversity/rds'

import { NewsData } from '@/data/NewsData'
import Image from 'next/image'
import Link from 'next/link'
import { BadgeGroup } from '@/components-rds-updates/BadgeGroup/BadgeGroup'
import { Badge } from '@/components-rds-updates/Badge/Badge'

export default function HomeNews() {
  return (
    <Section as="div" maxWidth="7xl">
      <Column cols="4" maxWidth="7xl">
        {NewsData.slice(0, 4).map(({ id, link, title, image, alt, badge }) => (
          <Card key={id}>
            <Card.Figure>
              <Image src={image} alt={alt} width="300" height="200" />
              <BadgeGroup gap="2" isAbsolute top={2} left={2}>
                <Badge color="grey" text={badge} rounded="md" />
              </BadgeGroup>
            </Card.Figure>
            <Card.Header title={title} />
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
        ))}
      </Column>
    </Section>
  )
}
