import React from 'react'
import { Card, Column, Heading } from '@carletonuniversity/rds'
import Link from 'next/link'
import { NewsData } from '../../data/NewsData'
import Image from 'next/image'

export const CommunityNews = () => {
  return (
    <Column cols="4" maxWidth="7xl">
      {NewsData.slice(0, 4).map(({ id, title, link, date, image, alt }) => (
        <Card key={id}>
          <Link href={link}>
            <Card.Figure>
              <Image src={image} alt={alt} width="400" height="266" />
            </Card.Figure>
            <Card.Content>
              <Card.PostMeta date={date} />
              <Card.Header text={title} />
            </Card.Content>
          </Link>
        </Card>
      ))}
    </Column>
  )
}
