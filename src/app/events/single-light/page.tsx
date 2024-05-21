'use client'
import {
  WideImage,
  ButtonGroup,
  Button,
  Container,
  PageHeaders,
  Column,
  Aside,
  StackedList,
  Card,
} from '@carletonuniversity/rds'
import { EventData } from '@/data/EventData'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <WideImage
        title="Brain Health Research Day 2024"
        headerType="h1"
        isType="light"
      >
        <p>Wednesday, December 21st, 2023 at 6:00pm</p>
        <ButtonGroup>
          <Button title="Register Now" />
          <Button color="white" title="Secondary" />
        </ButtonGroup>
      </WideImage>

      <Column cols="2/3" maxWidth="7xl" reverse>
        <Column.Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed urna
            et sapien cursus dapibus. Nulla feugiat enim erat, quis sollicitudin
            libero viverra et. Proin consequat, nibh nec consectetur commodo,
            est ipsum ullamcorper elit, elementum vulputate ex est sed mauris.
            Duis id justo eu lectus eleifend condimentum sit amet nec dolor. Sed
            dui augue, pellentesque ut diam quis, congue tempor massa. Quisque
            mauris enim, ultricies vitae sapien at, faucibus tristique urna.
            Praesent consequat ante non neque ultrices faucibus. Curabitur ante
            augue, dictum vel volutpat vel, lacinia quis ante. Nulla dolor sem,
            commodo vel gravida sit amet, porttitor quis nulla.
          </p>
          <p>
            Quisque non urna vitae dolor auctor faucibus vel id tortor. Nam
            euismod tempor sapien id venenatis. Duis vel massa mollis, suscipit
            lectus vitae, pulvinar dui. Donec eu turpis tortor. Donec orci ante,
            volutpat eget ante vitae, malesuada semper nulla.
          </p>
          <p>
            Nulla tempor vitae ante et gravida. Nunc aliquet gravida nisi, sit
            amet imperdiet justo. Proin eu ex lectus. Fusce et porttitor nisl,
            eu faucibus erat. Vivamus tincidunt dapibus turpis non lobortis.
            Maecenas leo ex, dignissim eget tellus in, dapibus convallis libero.
            Duis fermentum nulla at lobortis facilisis. Nam leo sem, luctus eget
            rhoncus quis, imperdiet vitae sem.
          </p>
          <p>
            Quisque non urna vitae dolor auctor faucibus vel id tortor. Nam
            euismod tempor sapien id venenatis. Duis vel massa mollis, suscipit
            lectus vitae, pulvinar dui. Donec eu turpis tortor. Donec orci ante,
            volutpat eget ante vitae, malesuada semper nulla.
          </p>
        </Column.Content>
        <Aside topSpace={105} isSticky>
          <StackedList header="Event Details" as="ul" cols="1">
            <li className="px-6 py-4">
              <strong className="block">Hybrid Event</strong>
              December 21st, 2023 at 6:00pm
              <br />
              Field House, 1125 Colonel By Drive
              <br />
              <a className="font-medium text-cu-red hover:underline" href="#">
                Join event via teams
              </a>
            </li>
            <li className="px-6 py-4">
              <strong className="block">Cost</strong>
              $20 per adult, $15 for youth/senior
            </li>
            <li className="px-6 py-4">
              <strong className="block">Contact</strong>
              <a className="font-medium text-cu-red hover:underline" href="#">
                John Doe
              </a>
              , 613-520-2600 x1234
            </li>
          </StackedList>
        </Aside>
      </Column>

      <Container maxWidth="7xl" isGrey>
        <PageHeaders header="Upcoming Events" as="h1" size="md" />
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
        <ButtonGroup>
          <Button title="View More Events" color="dark-grey" isCenter />
        </ButtonGroup>
      </Container>
    </>
  )
}
