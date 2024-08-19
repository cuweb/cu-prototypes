import React from 'react'
import { Section } from '@carletonuniversity/rds'
import Testimonial from '@/components/Testimonial/Testimonial'

export default function Testimonials() {
  return (
    <Section maxWidth="7xl">
      <Testimonial
        name="John Doe"
        imageUrl="https://picsum.photos/id/342/600/400"
        focalPointX="60"
        focalPointY="100"
      >
        <p>
          Obis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
        </p>
      </Testimonial>
    </Section>
  )
}
