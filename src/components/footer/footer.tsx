import styles from './style/footer.module.css'

import GitHubIcon from '../icons/github/github-icon'
import SmallLogo from '../logo/small-logo'

import NeonLink from '../buttons/neon-link'
import NeonText from '../neon-text/neon-text'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <NeonLink color='yellow' href='/'>
        <SmallLogo/>
        AniRekome
      </NeonLink>

      <NeonLink color='yellow' href='/terms'>
        Terms of Service
      </NeonLink>

      <NeonLink color='yellow' href='/privacy'>
        Privacy Policy
      </NeonLink>

      <NeonLink color='yellow' href='https://github.com/9elt/anirekome.git'>
      <GitHubIcon/>
          GitHub
      </NeonLink>
      
    </footer>
  )
}
