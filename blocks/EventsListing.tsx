import React from 'react'
import { EventItem, StackedList } from '@carletonuniversity/rds'
import { EventData as eventData } from '../data/EventData'

export const EventsListing = () => {
  return (
    <StackedList header="Upcoming Events" hasShadow>
      {eventData.map(
        ({
          link,
          title,
          startDate,
          endDate,
          event_address,
          on_campus,
          on_campus_building,
          on_campus_room_number,
          tags,
        }) => (
          <EventItem
            as="li"
            key={567}
            link={link}
            title={title}
            startDateTime={startDate}
            endDateTime={endDate}
            event_address={event_address}
            on_campus={on_campus}
            on_campus_building={on_campus_building}
            on_campus_room_number={on_campus_room_number}
            tags={tags}
          />
        ),
      )}
    </StackedList>
  )
}
