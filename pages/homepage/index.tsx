import type { NextPage } from 'next'
import {
  Main,
  Section,
  Column,
  Heading,
  Card,
  TopBar,
  Container,
  StackedList,
  Listing,
  Button,
  FooterStandard,
} from '@carletonuniversity/rds'

import Link from 'next/link'
import Image from 'next/image'

import { HomepageNavData } from 'data/TopBarData'
import { NewsData } from 'data/NewsData'
import { EventData } from 'data/EventData'

const Home: NextPage = () => {
  return (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo>
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <Image
                className="culogo"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
                width="130"
                height="35"
                alt="Logo"
              />
              <Image
                className="cushield"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
                width="28"
                height="35"
                alt="Logo"
              />
            </a>
          </TopBar.Logo>
          <TopBar.Menu>
            {HomepageNavData.map((topBarLink, i) => (
              <>
                {!topBarLink.submenu && (
                  <a
                    key={i}
                    href={topBarLink.href}
                    className="cu-topbar--parent-link"
                  >
                    {topBarLink.title}
                  </a>
                )}
                {topBarLink.submenu && (
                  <TopBar.SubMenu label={topBarLink.title}>
                    {topBarLink.submenu.map((topBarSubLink, s) => (
                      <a
                        key={s}
                        href={topBarSubLink.href}
                        className="cu-topbar--more-nav"
                      >
                        {topBarSubLink.title}
                      </a>
                    ))}
                  </TopBar.SubMenu>
                )}
              </>
            ))}
          </TopBar.Menu>
          <TopBar.Aside />
        </TopBar.Primary>
      </TopBar>

      <Main>
        <Section hasProse>
          <Container isGrey>
            <div className="h-[480px]"></div>
          </Container>

          <Container>
            <Heading text="Spotlight" maxWidth="7xl" />
            <Column cols="4" maxWidth="7xl">
              {NewsData.slice(0, 4).map(
                ({ id, title, link, date, image, alt }) => (
                  <Card key={id}>
                    <Link href={link}>
                      <Card.Figure>
                        <Image alt={alt} height="266" src={image} width="400" />
                      </Card.Figure>
                      <Card.Content>
                        <Card.PostMeta date={date} />
                        <Card.Header text={title} />
                      </Card.Content>
                    </Link>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Column cols="2" maxWidth="7xl">
              <Column.Content>
                <Heading text="Upcoming Events" />
                <StackedList hasShadow>
                  {EventData.slice(0, 3).map(
                    (
                      { id, title, link, startDate, endDate, event_address },
                    ) => (
                      <Listing key={id}>
                        <a href={link}>
                          <Listing.DateBox
                            startDate={startDate}
                            endDate={endDate}
                          />
                          <Listing.Content>
                            <Listing.Header text={title} />
                            <Listing.EventMeta
                              startDateTime={startDate}
                              endDateTime={endDate}
                              eventAddress={event_address}
                              onCampus
                            />
                          </Listing.Content>
                        </a>
                      </Listing>
                    ),
                  )}
                </StackedList>
                <br />
                <Button title="More upcoming events →" isSmall />
              </Column.Content>
              <Column.Content>
                <Heading text="Academic Features" />
                <StackedList hasShadow>
                  {NewsData.slice(0, 3).map(
                    ({ id, title, link, date, image, alt }) => (
                      <Listing key={id}>
                        <a href={link}>
                          <Listing.Figure>
                            <Image
                              alt={alt}
                              height="266"
                              src={image}
                              width="400"
                            />
                          </Listing.Figure>
                          <Listing.Content>
                            <Listing.PostMeta date={date} />
                            <Listing.Header text={title} />
                          </Listing.Content>
                        </a>
                      </Listing>
                    ),
                  )}
                </StackedList>
              </Column.Content>
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Attend Carleton" maxWidth="7xl" />
            <Column cols="2" maxWidth="7xl">
              <Column.Content>
                <div className="cu-card not-prose relative flex flex-col cu-card overflow-hidden rounded-lg bg-white shadow-lg @container md:max-w-5xl group duration-300 ease-in hover:scale-105 cursor-pointer">
                  <div>
                    <div className="relative pt-[56.25%] bg-cu-black-900">
                      <div
                        style={{ width: '100%', height: '100%' }}
                        className="absolute top-0 left-0"
                      >
                        <div style={{ width: '100%', height: '100%' }}>
                          <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title="YouTube video player"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/QsR50Qi0gfA?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fcuweb.github.io&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;widget_referrer=https%3A%2F%2Fcuweb.github.io%2Frds%2F&amp;enablejsapi=1&amp;widgetid=5"
                            id="widget6"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3 relative">
                      <h2 className="text-lg font-semibold text-cu-black @sm:md:text-xl leading-6 @sm:md:leading-8 group-hover:text-cu-red">
                        5 Great Reasons to Choose Carleton
                      </h2>
                    </div>
                  </div>
                </div>
              </Column.Content>
              <Column.Content>
                <Column>
                  <Card hasBorder noLink>
                    <Card.Content>
                      <Card.Stats
                        desc="26,163 undergraduate and 4,515 graduate students"
                        stat="Admissions for 2022-23"
                        reverse
                      />
                    </Card.Content>
                  </Card>
                </Column>
                <Column cols="2">
                  <Card hasBorder>
                    <Card.Content>
                      <Card.Stats
                        desc="Browse programs for"
                        stat="Undergrad students"
                      />
                    </Card.Content>
                  </Card>
                  <Card hasBorder>
                    <Card.Content>
                      <Card.Stats
                        desc="Browse programs for"
                        stat="Graduate students"
                      />
                    </Card.Content>
                  </Card>
                  <Card hasBorder>
                    <Card.Content>
                      <Card.Stats
                        desc="Professional development"
                        stat="Executive education"
                      />
                    </Card.Content>
                  </Card>
                  <Card hasBorder>
                    <Card.Content>
                      <Card.Stats
                        desc="Programs for all"
                        stat="Continuing studies"
                      />
                    </Card.Content>
                  </Card>
                </Column>
              </Column.Content>
            </Column>
          </Container>

          <Container>
            <Heading text="Image Gallery" maxWidth="7xl" />
            <Column cols="2/3" maxWidth="7xl">
              <Column.Content>
                <div className="px-8 pt-6 pb-48 rounded-lg bg-cu-black-50"></div>
              </Column.Content>
              <Column.Content>
                <div className="px-8 pt-6 pb-48 rounded-lg bg-cu-black-50"></div>
              </Column.Content>
            </Column>
            <Column cols="1/3" maxWidth="7xl">
              <Column.Content>
                <div className="px-8 pt-6 pb-48 rounded-lg bg-cu-black-50"></div>
              </Column.Content>
              <Column.Content>
                <div className="px-8 pt-6 pb-48 rounded-lg bg-cu-black-50"></div>
              </Column.Content>
            </Column>
            <Column cols="2" maxWidth="7xl">
              <Column.Content>
                <div className="px-8 pt-6 pb-48 rounded-lg bg-cu-black-50"></div>
              </Column.Content>
              <Column.Content>
                <div className="px-8 pt-6 pb-48 rounded-lg bg-cu-black-50"></div>
              </Column.Content>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterStandard />
    </>
  )
}

export default Home
