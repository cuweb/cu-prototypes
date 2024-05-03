"use client";
import Link from "next/link";
import {
  Main,
  LinkProvider,
  Nav,
  Section,
  PageHeaders,
} from "@carletonuniversity/rds";

export default function Home() {
  return (
    <>
      <LinkProvider type={Link}>
        <Nav navType="primary">
          <Nav.Logo
            title="CU Prototypes"
            link="https://carleton.ca/webservices"
          />
        </Nav>
      </LinkProvider>
      <Main>
        <Section hasProse>
          <PageHeaders header="Layouts and Testing" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sodales at eros ac condimentum. Cras elementum rhoncus purus, sit
            amet commodo tortor placerat at. Fusce massa sem, ornare at auctor
            non, pulvinar sed arcu. Quisque eget feugiat augue, vitae venenatis
            libero. Integer consequat non quam malesuada tempus. Proin feugiat
            turpis sit amet interdum dignissim. Aliquam ut enim quis sapien
            lacinia auctor sit amet sit amet felis.{" "}
          </p>
          <ul>
            <li><Link href="/events">Event Calendar Prototypes</Link></li>
          </ul>
          <p>
            Fusce nibh enim, scelerisque at purus nec, aliquet viverra erat.
            Nulla aliquam augue vel ex ultrices finibus. Duis ullamcorper
            sollicitudin fermentum. Aenean eu mattis sapien, at malesuada arcu.
            In dictum risus mi, ac suscipit purus consectetur et. Fusce ut
            libero sagittis, luctus mi sed, auctor odio. Cras in consequat orci.
            Sed malesuada nulla justo, ut porttitor enim venenatis vel.
          </p>
        </Section>
      </Main>
    </>
  );
}
