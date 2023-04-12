import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import {
  Main,
  TopNav,
  Section,
  FooterBasic,
  Banner,
  StackedList,
  Listing,
} from '@carletonuniversity/rds'

import { NewsData as newsData } from '../../../data/NewsData'
import { EventData as eventData } from '../../../data/EventData'
import { PeopleData as peopleData } from '../../../data/PeopleData'

const Content = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus
        imperdiet turpis nec elit ultricies, sed tempus diam dignissim.
        Suspendisse condimentum magna vel orci vulputate, eget vulputate neque
        porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus
        vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis
        interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit
        tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <TopNav title="Carleton University" />
      <Banner
        title="News Cards"
        paragraph="Component Prototypes"
        align="left"
      />

      <Main>
        <Section hasProse>
          <Content />

          <StackedList hasBorder>
            {newsData
              .slice(0, 1)
              .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <Link href={link}>
                    <Listing.Figure>
                      <Image src={image} alt={alt} width="400" height="266" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </Link>
                </Listing>
              ))}
          </StackedList>

          <StackedList hasBorder>
            {eventData
              .slice(0, 1)
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

          <StackedList hasBorder>
            {peopleData
              .slice(0, 1)
              .map(
                ({
                  id,
                  link,
                  firstName,
                  lastName,
                  jobTitle,
                  email,
                  phone,
                  image,
                  alt,
                  tags,
                }) => (
                  <Listing key={id}>
                    <Link href={link}>
                      <Listing.Figure size="small">
                        <Image src={image} alt={alt} width="400" height="400" />
                      </Listing.Figure>
                      <Listing.Content>
                        <Listing.Header text={`${firstName} ${lastName}`} />
                        <Listing.PeopleMeta
                          jobTitle={jobTitle}
                          email={email}
                          phone={phone}
                        />
                        <Listing.Badges tags={tags} />
                      </Listing.Content>
                    </Link>
                  </Listing>
                ),
              )}
          </StackedList>

          <StackedList cols="2" hasBorder>
            {newsData
              .slice(0, 2)
              .map(({ id, title, link, image, alt, date, excerpt, tags }) => (
                <Listing key={id}>
                  <Link href={link}>
                    <Listing.Figure>
                      <Image src={image} alt={alt} width="400" height="175" />
                    </Listing.Figure>
                    <Listing.Content>
                      <Listing.PostMeta date={date} />
                      <Listing.Header text={title} />
                      <Listing.Excerpt text={excerpt} />
                      <Listing.Badges tags={tags} />
                    </Listing.Content>
                  </Link>
                </Listing>
              ))}
          </StackedList>

          <StackedList cols="2" hasBorder>
            {eventData
              .slice(0, 2)
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

          <StackedList cols="2" hasBorder>
            {peopleData
              .slice(0, 2)
              .map(
                ({
                  id,
                  link,
                  firstName,
                  lastName,
                  jobTitle,
                  email,
                  phone,
                  image,
                  alt,
                  tags,
                }) => (
                  <Listing key={id}>
                    <Link href={link}>
                      <Listing.Figure>
                        <Image src={image} alt={alt} width="400" height="175" />
                      </Listing.Figure>
                      <Listing.Content>
                        <Listing.Header text={`${firstName} ${lastName}`} />
                        <Listing.PeopleMeta
                          jobTitle={jobTitle}
                          email={email}
                          phone={phone}
                        />
                        <Listing.Badges tags={tags} />
                      </Listing.Content>
                    </Link>
                  </Listing>
                ),
              )}
          </StackedList>

          <Content />
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
