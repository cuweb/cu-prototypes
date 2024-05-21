import React from 'react'
import Image from 'next/image'
import { EventData } from '@/data/EventData'
import { PageHeaders, Column, Card } from '@carletonuniversity/rds'

export default function FeaturedCardsBase() {
  return (
    <>
      <PageHeaders header="Feature Events" as="h2" size="md" />
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
                <a
                  href={link}
                  className="cu-button cu-button--red cu-button--small"
                >
                  More info
                </a>
              </Card.Footer>
            </Card>
          ),
        )}
      </Column>
    </>
  )
}
