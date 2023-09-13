import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Column,
  Heading,
  Card,
  HeroTextImage,
} from '@carletonuniversity/rds'

import { TopBarOld } from '@components/TopBarOld/TopBarOld'
import { Quote } from '@components/Quote/Quote'
import { cuthemeNavData } from 'data/TopNavData'
import Link from 'next/link'
import Image from 'next/image'

import { NewsData } from 'data/NewsData'
import { styles } from 'blocks/intranet/Intranet.Styles'

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const DoublePara = () => {
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

const proseStyles = {
  newProse: `prose prose-lg prose-rds md:prose-xl prose-img:w-full prose-img:rounded-lg prose-blockquote:font-normal prose-blockquote:not-italic  prose-blockquote:text-cu-black-700`,
}

const Home: NextPage = () => {
  return (
    <>
      <TopBarOld
        title="Information and Technology Services"
        homeLink="/cutheme"
        navLinks={cuthemeNavData}
        isTwoTier
      ></TopBarOld>

      <Main>
        <div className={`${proseStyles.newProse} max-w-7xl mx-auto`}>
          <DoublePara />

          <Quote cite="Poo poo face" symbol="default">
            <p>
              obis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
            </p>
          </Quote>

          <DoublePara />
        </div>
      </Main>

      <FooterBasic />
    </>
  )
}

export default Home
