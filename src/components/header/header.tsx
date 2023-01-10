import styles from './style/header.module.css'

import Logo from '../logo/logo'
import Link from '../buttons/link'

import NeonText from '../neon-text/neon-text'

import { userState } from 'src/global-state/user'
import { useRecoilState } from 'recoil'
import ConnectIcon from '../icons/connect/connect-icon'
import UpdateIcon from '../icons/update/update-icon'
import SaveIcon from '../icons/save/save-icon'
import { color } from 'src/resources/color-map/color-map'
import NeonButton from '../buttons/neon-button'
import { cookieSession, deleteSession } from 'src/session/use'
import { useRouter } from 'next/router'
import getRecommendationsApi from 'src/api/recommendations/get-recomendations'

export default function Header() {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  const disconnect = () => {
    deleteSession()
    setUser({user_name: ''})
    router.push("/")
  }

  const update = async (e: any) => {
    if (!user.api) return;
    let update: cookieSession = {
      user_name: user.user_name,
      next_request: {
        ...user.api.next_request,
        force_list_update: true
      }
    }
    e.target.classList.add('update-animation');
    await getRecommendationsApi(update);
    e.target.classList.remove('update-animation');
  }

  return (
    <div className={styles.header}>

      {user.api &&
        <div style={{display: 'flex', alignItems: 'center', width: '5rem'}}>
          <NeonButton size='small' style={color('yellow')}>
            <SaveIcon size='small'/>
          </NeonButton>
        </div>
      }

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
        <div style={{display: 'flex', alignItems: 'center', width: '5rem'}}>
          <h4 style={{marginRight: '1rem'}}>
            {user.user_name}
          </h4>
          <NeonButton size='small' style={color('blue')} action={update}>
            <UpdateIcon/>
          </NeonButton>
          <NeonButton size='small' style={color('red')} action={disconnect}>
            <ConnectIcon/>
          </NeonButton>
        </div>
      }
    </div>
  )
}