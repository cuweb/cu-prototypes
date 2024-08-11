import React from 'react'
import { Section, PageHeader, ImageGrid } from '@carletonuniversity/rds'
import Image from 'next/image'

export default function CampusLife() {
  return (
    <Section maxWidth="7xl">
      <PageHeader
        as="h2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper sollicitudin id vitae turpis."
        header="Campus Life"
        size="md"
      />
      <ImageGrid cols="4" gridGap="2" maxWidth="5xl">
        <ImageGrid.Image
          colSpan="2"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Porta pulvinar consectetur faucibus fusce scelerisque nulla!"
          link="https://github.com/cuweb/rds"
          rowSpan="2"
          title="Overlay Image Title"
        >
          <Image
            width="600"
            height="400"
            alt="test"
            src="https://picsum.photos/id/337/600/400"
          />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <Image
            width="600"
            height="400"
            alt="Image requirement"
            src="https://picsum.photos/id/531/600/400"
          />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <Image
            width="600"
            height="400"
            alt="Image requirement"
            src="https://picsum.photos/id/626/600/400"
          />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <Image
            width="600"
            height="400"
            alt="Image requirement"
            src="https://picsum.photos/id/381/600/400"
          />
        </ImageGrid.Image>
        <ImageGrid.Image>
          <Image
            width="600"
            height="400"
            alt="Image requirement"
            src="https://picsum.photos/id/691/600/400"
          />
        </ImageGrid.Image>
      </ImageGrid>
    </Section>
  )
}
