import React from 'react'
import { StackedList, Listing, Column } from '@carletonuniversity/rds'
import Link from 'next/link'
import { NewsData } from '../../data/NewsData'
import { EventData as eventData } from '../../data/EventData'

export const NewsEvents = () => {
  return (
    <Column cols="3" maxWidth="7xl">
      <Column.Content>
        <StackedList header="Top 5" hasShadow>
          {NewsData.slice(0, 5).map(({ id, title, link, excerpt }) => (
            <Listing key={id}>
              <Link href={link}>
                <Listing.Content>
                  <Listing.Header text={title} />
                </Listing.Content>
              </Link>
            </Listing>
          ))}
        </StackedList>
      </Column.Content>

      <Column.Content>
        <StackedList header="Internal News" hasShadow>
          {NewsData.slice(0, 4).map(({ id, title, link, date }) => (
            <Listing key={id}>
              <Link href={link}>
                <Listing.Content>
                  <Listing.PostMeta date={date} />
                  <Listing.Header text={title} />
                </Listing.Content>
              </Link>
            </Listing>
          ))}
        </StackedList>
      </Column.Content>

      <Column.Content>
        <StackedList header="Internal Events" hasShadow>
          {eventData
            .slice(0, 3)
            .map(
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
              }) => (
                <Listing key={id}>
                  <Link href={link}>
                    {/* <Listing.DateBox startDate={startDate} /> */}
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
                    </Listing.Content>
                  </Link>
                </Listing>
              ),
            )}
        </StackedList>
      </Column.Content>
    </Column>
  )
}
