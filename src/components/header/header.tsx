import styles from './style/header.module.css'

import Logo from '../logo/logo'
import Link from '../buttons/link'

import NeonText from '../neon-text/neon-text'

import { userState } from 'src/global-state/user'
import { useRecoilState } from 'recoil'
import ConnectIcon from '../icons/connect/connect-icon'
import { color } from 'src/resources/color-map/color-map'
import NeonButton from '../buttons/neon-button'
import { deleteSession } from 'src/session/use'

export default function Header() {
  const [user, setUser] = useRecoilState(userState);

  const disconnect = () => {
    deleteSession()
    setUser({user_name: ''})
  }

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
      
      {user.api &&
        <div style={{marginLeft: '20rem', display: 'flex', alignItems: 'center'}}>
          <h4 style={{marginRight: '1rem'}}>
            {user.user_name}
          </h4>
          <NeonButton size='small' style={color('red')} action={disconnect}>
            <ConnectIcon/>
          </NeonButton>
        </div>
      }
    </div>
  )
}