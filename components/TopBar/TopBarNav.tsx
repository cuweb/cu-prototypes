import { styles } from './TopBar.Styles'

export interface TopBarNavProps {
  text: string
}

export const TopBarNav = ({ text }: TopBarNavProps) => {
  return (
    <p className={styles.excerpt}>
      {text.length > 170 ? `${text.substring(0, 170)}...` : text}
      <span className={styles.more}> Read more</span>
    </p>
  )
}

TopBarNav.displayName = 'TopBar.Nav'
