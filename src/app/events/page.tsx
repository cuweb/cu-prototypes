'use client'
import { Section, Column, PageHeader, Card } from '@carletonuniversity/rds'

export default function Page() {
  return (
    <Section maxWidth="7xl">
      <PageHeader as="h1" header="Event Homepage Prototypes" size="lg" />
      <Column maxWidth="7xl" cols="3">
        <Card>
          <Card.Header title="Event Homepage Prototype" />
          <Card.Body>
            <Card.Excerpt text="Features a wide image banner to showcase an important event, followed by 3-4 additional featured events along with a paginated list of filterable events." />
          </Card.Body>
          <Card.Footer>
            <a
              className="cu-button cu-button--red cu-button--small"
              href="/events/homepage"
            >
              View Prototype
            </a>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header title="Single Event Page Prototype" />
          <Card.Body>
            <Card.Excerpt text="This prototype reflects a single event view in cutheme." />
          </Card.Body>
          <Card.Footer>
            <a
              className="cu-button cu-button--red cu-button--small"
              href="/events/single"
            >
              View Prototype
            </a>
          </Card.Footer>
        </Card>
      </Column>
    </Section>
  )
}
