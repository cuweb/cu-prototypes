import React from 'react'
import Link from 'next/link'
import { Listing, StackedList } from '@carletonuniversity/rds'
import { EventData as eventData } from '../../data/EventData'

export const EventsListing = () => {
  return (
    <StackedList cols="2" header="Upcoming Events" hasShadow>
      {eventData.map(
        ({
          id,
          title,
          link,
          startDate,
          endDate,
          on_campus,
          on_campus_building,
          on_campus_room_number,
          event_address,
          tags,
        }) => (
          <Listing key={id}>
            <Link href={link}>
              <Listing.DateBox startDate={startDate} />
              <Listing.Content>
                <Listing.Header text={title} />
                <Listing.EventMeta
                  startDateTime={startDate}
                  endDateTime={endDate}
                  onCampus={on_campus}
                  onCampusBuilding={on_campus_building}
                  onCampusRoomNumber={on_campus_room_number}
                  eventAddress={event_address}
                />
                <Listing.Badges tags={tags} />
              </Listing.Content>
            </Link>
          </Listing>
        ),
      )}
    </StackedList>
  )
}
