import React from 'react'
import { Column, Heading } from '@carletonuniversity/rds'
import { styles, colStyles } from './Intranet.Styles'
import { QuickAccess } from './QuickAccess'
import { MarketPlace } from './MarketPlace'
import { InternalNews } from './InternalNews'
import { InternalEvents } from './InternalEvents'

export const CommunityConnect = () => {
  return (
    <>
      <Heading text="Community Connect" maxWidth="7xl" />
      <Column cols="2/3" maxWidth="7xl">
        <div>
          <Column cols="2">
            <div className={`${styles.placeholder} ${colStyles.colSpan2} h-72`}>
              Bulletin Board
            </div>
            <div>
              <InternalNews />
            </div>
            <div>
              <InternalEvents />
            </div>
          </Column>
        </div>
        <div>
          <QuickAccess />
        </div>
      </Column>

      <Column cols="2" maxWidth="7xl">
        <div className={styles.placeholder}>Ideas @ Carleton</div>
        <div>
          <MarketPlace />
        </div>
      </Column>
    </>
  )
}
