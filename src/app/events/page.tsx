'use client'
import { useState, useCallback } from 'react'
import {
  WideImage,
  ButtonGroup,
  Button,
  Container,
  PageHeaders,
  Column,
  StackedList,
  Listing,
  Pagination,
  Filter,
  Calendar,
  Card,
} from '@carletonuniversity/rds'
import { CalendarData, EventData } from '@/data/EventData'
import { FilterData } from '@/data/FilterData'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Container maxWidth="7xl">
        <PageHeaders header="Feature Events" as="h1" size="md" />
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
      </Container>

      <Container maxWidth="7xl" isGrey>
        <PageHeaders header="Upcoming Events" as="h2" size="md" />

        <Column maxWidth="7xl">
          <Filter filters={FilterData.filters} callback={() => undefined} />
        </Column>

        <Column cols="2/3" maxWidth="7xl">
          <Column.Content>
            <StackedList>
              {EventData.slice(0, 8).map(
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
                    <Listing.DateThumb
                      startDate={startDate}
                      endDate={endDate}
                    />
                    <Listing.Body>
                      <Listing.Header title={title} />
                      <Listing.EventMeta
                        startDateTime={startDate}
                        endDateTime={endDate}
                        onCampus={on_campus}
                        onCampusBuilding={on_campus_building}
                        onCampusRoomNumber={on_campus_room_number}
                        eventAddress={event_address}
                      />
                      <Listing.Footer>
                        <a href={link} className="cu-button cu-button--red">
                          Event details
                        </a>
                      </Listing.Footer>
                    </Listing.Body>
                  </Listing>
                ),
              )}
            </StackedList>
            <Pagination
              totalCount={48}
              siblingCount={1}
              pageSize={5}
              callback={() => undefined}
            />
          </Column.Content>

          <Column.Content>
            <div className="sticky top-24">
              <Calendar events={CalendarData} callback={() => undefined} />
            </div>
          </Column.Content>
        </Column>
      </Container>
    </>
  )
}
