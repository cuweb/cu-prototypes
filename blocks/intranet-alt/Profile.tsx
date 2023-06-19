import React from 'react'
import { Column } from '@carletonuniversity/rds'
import { styles } from './Intranet.Styles'

export const Profile = () => {
  return (
    <Column cols="2/3" maxWidth="7xl">
      <div className={styles.placeholder}>Profile</div>
      <div className={styles.placeholder}>TBD</div>
    </Column>
  )
}
