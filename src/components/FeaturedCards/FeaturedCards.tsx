import React from 'react'
import Image from 'next/image'
import { EventData } from '@/data/EventData'
import { PageHeaders, Column, Card } from '@carletonuniversity/rds'

export default function FeaturedCards() {
  return (
    <div className="cu-featurecards cu-block-spacing not-contained max-w-screen-2xl mx-auto">
      <div className="bg-gradient-to-tr from-cu-black-50 to-white pb-64 rounded-md px-20 border border-cu-black-25"></div>

      <div className="px-10 -mt-72 max-w-7xl mx-auto">
        <PageHeaders header="Featured Events" as="h1" size="lg" />
        <Column cols="4" maxWidth="7xl">
          {EventData.slice(0, 4).map(
            ({
              id,
              title,
              link,
              image,
              alt,
              startDate,
              endDate,
              on_campus,
              on_campus_building,
              on_campus_room_number,
              event_address,
            }) => (
              <Card key={id}>
                <Card.Figure>
                  <Image src={image} alt={alt} width={400} height={175} />
                </Card.Figure>
                <Card.DateThumb startDate={startDate} endDate={endDate} />
                <Card.Header title={title} />
                <Card.Body>
                  <Card.EventMeta
                    startDateTime={startDate}
                    endDateTime={endDate}
                    onCampus={on_campus}
                    onCampusBuilding={on_campus_building}
                    onCampusRoomNumber={on_campus_room_number}
                    eventAddress={event_address}
                  />
                </Card.Body>
                <Card.Footer>
                  <a href={link} className="cu-button cu-button--red">
                    More info
                  </a>
                </Card.Footer>
              </Card>
            ),
          )}
        </Column>
      </div>
    </div>
  )
}
