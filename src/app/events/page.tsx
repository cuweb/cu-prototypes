'use client'
import { WideImage, ButtonGroup, Button } from '@carletonuniversity/rds'

export default function Page() {
  return (
    <>
      <WideImage headerType="h1" image="https://picsum.photos/1600/700" isType="image" title="Wide image with bg image">
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <ButtonGroup>
          <Button title="Submit an Event" />
          <Button color="grey" title="Equipment Rentals" />
        </ButtonGroup>
      </WideImage>
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales at eros ac condimentum. Cras elementum
        rhoncus purus, sit amet commodo tortor placerat at. Fusce massa sem, ornare at auctor non, pulvinar sed arcu.
        Quisque eget feugiat augue, vitae venenatis libero. Integer consequat non quam malesuada tempus. Proin feugiat
        turpis sit amet interdum dignissim. Aliquam ut enim quis sapien lacinia auctor sit amet sit amet felis.{' '}
      </p>
      <p>
        Fusce nibh enim, scelerisque at purus nec, aliquet viverra erat. Nulla aliquam augue vel ex ultrices finibus.
        Duis ullamcorper sollicitudin fermentum. Aenean eu mattis sapien, at malesuada arcu. In dictum risus mi, ac
        suscipit purus consectetur et. Fusce ut libero sagittis, luctus mi sed, auctor odio. Cras in consequat orci. Sed
        malesuada nulla justo, ut porttitor enim venenatis vel.
      </p>
    </>
  )
}
