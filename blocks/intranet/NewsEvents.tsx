import React from 'react'
import { StackedList, Listing, Column, Heading } from '@carletonuniversity/rds'
import Link from 'next/link'
import { NewsData as newsData } from '../../data/NewsData'
import { EventData as eventData } from '../../data/EventData'
import Image from 'next/image'

export const NewsEvents = () => {
  return (
    <>
      <Heading text="Internal News & Events" maxWidth="7xl" />
      <Column cols="1/3" maxWidth="7xl">
        <Column.Content>
          <StackedList hasShadow>
            {newsData
              .slice(0, 5)
              .map(({ id, title, link, image, alt, date }) => (
                <Listing key={id}>
                  <Link href={link}>
                    {/* <Listing.Figure>
                      <Image alt={alt} height="266" src={image} width="400" />
                    </Listing.Figure> */}
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
          <StackedList cols="2" hasShadow>
            {eventData
              .slice(0, 6)
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
                      <Listing.DateBox startDate={startDate} endDate={endDate} />
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
    </>
  )
}
