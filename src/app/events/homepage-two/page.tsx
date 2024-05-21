'use client'
import {
  Container,
  PageHeaders,
  Column,
  StackedList,
  Listing,
  Pagination,
  Filter,
  Calendar,
  Aside,
} from '@carletonuniversity/rds'
import { CalendarData, EventData } from '@/data/EventData'
import { FilterData } from '@/data/FilterData'
import FeaturedCards from '@/components/FeaturedCards/FeaturedCards'

export default function Page() {
  return (
    <>
      {/* <Container maxWidth="7xl">
        <WideImage
          image="https://picsum.photos/1600/700"
          isType="image"
          title="Wide image with bg image"
        >
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit.
            Praesentium architecto a distinctio aut reprehenderit ducimus.
          </p>
          <ButtonGroup>
            <Button title="Apply Now" />
            <Button color="grey" title="Request Information" />
          </ButtonGroup>
        </WideImage>
      </Container> */}

      <Container maxWidth="7xl">
        <FeaturedCards />
      </Container>

      <Container maxWidth="7xl" isGrey>
        <PageHeaders header="Upcoming Events" as="h2" size="md" />
        <Filter filters={FilterData.filters} callback={() => undefined} />
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

          <Aside isSticky topSpace={110}>
            <Calendar events={CalendarData} callback={() => undefined} />
          </Aside>
        </Column>
      </Container>
    </>
  )
}
