import React from 'react'
import { Column, Heading } from '@carletonuniversity/rds'
import { styles, colStyles } from './Intranet.Styles'

export const BulletinBoard = () => {
  return (
    <>
      <Heading text="Bulletin Board" maxWidth="7xl" />
      <Column maxWidth="7xl">
        <div
          className={`${styles.placeholder} ${colStyles.colSpan2} h-72`}
        ></div>
      </Column>
    </>
  )
}
