import React from 'react'
import { Column, PageHeader, Section, utils } from '@carletonuniversity/rds'
import Image from 'next/image'

// Deconstruct propClass utils
// const { maxWidthClasses } = utils
// type maxWidthKeys = keyof typeof maxWidthClasses

export interface RedWaveProps {
  children?: React.ReactNode
  // title: string
  // maxWidth?: maxWidthKeys
}

export default function RedWave({
  children,
  // title,
  // maxWidth = 'full',
}: RedWaveProps) {
  return (
    <div
      className={`cu-redwave cu-component cu-browsers-edge bg-cu-waves-red-full bg-[length:100.5%] bg-top bg-no-repeat bg-cu-red not-contained cu-component-spacing pt-16 sm:pt-24 md:pt-36 lg:pt-44 xl:pt-48`}
    >
      <div className="pb-8 md:pb-12 lg:pb-16 xl:pb-20 text-white">
        <Column cols="2" maxWidth="7xl">
          <Column.Content>
            <PageHeader
              as="h2"
              header="Red Wave Testing"
              size="lg"
              noUnderline
              isWhite
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius feugiat euismod. Ut ut diam dapibus nisi ullamcorper
              sollicitudin id vitae turpis.
            </p>
          </Column.Content>
          <Column.Content>
            <div className="bg-white/50">Test {children}</div>
          </Column.Content>
        </Column>
      </div>
    </div>
  )
}
