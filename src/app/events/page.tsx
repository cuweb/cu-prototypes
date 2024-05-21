'use client'
import { Container, Column, PageHeaders, Card } from '@carletonuniversity/rds'

export default function Page() {
  return (
    <>
      <Container maxWidth="7xl">
        <PageHeaders as="h1" header="Event Homepage Prototypes" size="lg" />
        <Column maxWidth="7xl" cols="3">
          <Card>
            <Card.Header title="Homepage option one" />
            <Card.Body>
              <Card.Excerpt text="Features a wide image banner to showcase an important event, followed by 3-4 additional featured events along with a paginated list of filterable events." />
            </Card.Body>
            <Card.Footer>
              <a
                className="cu-button cu-button--red cu-button--small"
                href="/events/homepage-one"
              >
                View Prototype
              </a>
            </Card.Footer>
          </Card>
          {/* <Card>
            <Card.Header title="Homepage option two" />
            <Card.Body>
              <Card.Excerpt text="This is a work in progress and may not be required should option one be approved." />
            </Card.Body>
            <Card.Footer>
              <a
                className="cu-button cu-button--red cu-button--small"
                href="/events/homepage-two"
              >
                View Prototype
              </a>
            </Card.Footer>
          </Card> */}
        </Column>
      </Container>

      <Container maxWidth="7xl" isGrey>
        <PageHeaders as="h2" header="Single Event Page Prototypes" size="md" />
        <Column maxWidth="7xl" cols="3">
          <Card>
            <Card.Header title="cutheme style" />
            <Card.Body>
              <Card.Excerpt text="This prototype reflects a single event view in cutheme." />
            </Card.Body>
            <Card.Footer>
              <a
                className="cu-button cu-button--red cu-button--small"
                href="/events/single-cutheme"
              >
                View Prototype
              </a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header title="Banner with image" />
            <Card.Body>
              <Card.Excerpt text="This example uses the wide image component with an optional background image." />
            </Card.Body>
            <Card.Footer>
              <a
                className="cu-button cu-button--red cu-button--small"
                href="/events/single-image"
              >
                View Prototype
              </a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header title="Banner without an image" />
            <Card.Body>
              <Card.Excerpt text="When no banner image is set the components default light grey background is used." />
            </Card.Body>
            <Card.Footer>
              <a
                className="cu-button cu-button--red cu-button--small"
                href="/events/single-light"
              >
                View Prototype
              </a>
            </Card.Footer>
          </Card>
        </Column>
      </Container>
    </>
  )
}
