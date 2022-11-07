import styles from './style/header.module.css'

import SmallLogo from '../logo/small-logo'
import FullLogo from "../logo/full-logo"

import NeonText from '../neon-text/neon-text'

export default function Header() {

  return (
    <div className={styles.header}>

      <SmallLogo />

      <div style={{ marginLeft: 8 }}>
        <NeonText color='blue'>
          <h3>aniRekome</h3>
          <h4 style={{ fontSize: '0.8rem' }}>alpha v0.23</h4>
        </NeonText>
      </div>

    </div>
  )
}