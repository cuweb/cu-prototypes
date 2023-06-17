import React from 'react'
import { Column } from '@carletonuniversity/rds'
import { styles, colStyles } from './Intranet.Styles'

export const BulletinBoard = () => {
  return (
    <Column maxWidth="7xl">
      <div className={`${styles.placeholder} ${colStyles.colSpan2} h-72`}>
        Bulletin Board
      </div>
    </Column>
  )
}
