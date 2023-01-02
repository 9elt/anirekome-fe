import styles from './style/footer.module.css'

import GitHubIcon from '../icons/github/github-icon'
import Logo from '../logo/logo'

import NeonLink from '../buttons/neon-link'
import NeonText from '../neon-text/neon-text'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <NeonLink color='yellow' href='/'>
        <Logo style={{ marginRight: '2px' }} />
        Reko API
      </NeonLink>

      <NeonLink color='yellow' href='/privacy'>
        Documentation
      </NeonLink>

      <NeonLink color='yellow' href='/tos'>
        Terms of Service
      </NeonLink>

      <NeonLink color='yellow' href='/privacy'>
        Privacy Policy
      </NeonLink>

      <NeonLink color='yellow' href='https://github.com/9elt/Reko'>
        <GitHubIcon style={{ marginRight: '3px' }} />
        GitHub
      </NeonLink>

    </footer>
  )
}
