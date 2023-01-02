import styles from './style/header.module.css'

import Logo from '../logo/logo'
import Link from '../buttons/link'

import NeonText from '../neon-text/neon-text'

export default function Header() {

  return (
    <div className={styles.header}>
      <Link href='/' style={{display: 'flex', alignItems: 'center'}}>
        <Logo style={{ width: '2.5rem' }} neon />

        <div style={{ marginLeft: 3 }}>
          <NeonText color='blue'>
            <h3>Reko API</h3>
            <h4 style={{ fontSize: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>βeta </span>
              0.1.0
            </h4>
          </NeonText>
        </div>
      </Link>
    </div>
  )
}