import type { NextPage } from 'next'
import {
  Main,
  Section,
  FooterBasic,
  Container,
  Column,
} from '@carletonuniversity/rds'
import { TopBarOld } from '../../components/TopBarOld/TopBarOld'
import { intranetNavData } from 'data/TopNavData'
import { styles } from '../../blocks/intranet/Intranet.Styles'

const IntranetMyInfo: NextPage = () => {
  return (
    <>
      <TopBarOld
        title="Intranet"
        homeLink="/intranet"
        navLinks={intranetNavData}
      ></TopBarOld>

      <Main>
        <Section>
          <Container isGrey>
            <Column cols="2/3" maxWidth="7xl">
              <div className={styles.placeholder}>Profile Details</div>
              <div className={styles.placeholder}>Internal Sites</div>
            </Column>
          </Container>

          <Container>
            <Column maxWidth="7xl">
              <div className={styles.placeholder}>Annual Leave</div>
            </Column>
            <Column cols="3" maxWidth="7xl">
              <div className={styles.placeholder}>Pay Dates</div>
              <div className={styles.placeholder}>Pension Statements</div>
              <div className={styles.placeholder}>Tax Forms</div>
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  )
}

export default IntranetMyInfo
