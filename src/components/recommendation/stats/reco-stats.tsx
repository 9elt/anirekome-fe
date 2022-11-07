import styles from './style/stats.module.css'

import { useRouter } from 'next/router'

//  types
import type { userAnimeRecosType, userUserRecosType } from '../../../global-state/user';

export default function RecoStats({reco, isShown, toggle }: {
  reco: userAnimeRecosType & userUserRecosType,
  isShown: boolean,
  toggle: () => void,
}) {

  const router = useRouter();

  return (

    <div className={styles.container}  style={{height: isShown ? 184 : 28}}>

      <p style={{cursor: 'pointer'}} onClick={toggle}>nerd stats {isShown ? '[x]' : '>'}</p>

      <p><b>recommending user</b>:</p>

      <p><b>name</b>: {reco.offuscated ? `offuscated[hash: ${reco.name}]`: reco.name}</p>
      
      <p><b>affinity</b>: {`${reco.affinity.val} [±${reco.affinity.s}% s${reco.affinity.d}]`}</p>

      <p><b>shared entries</b>: {`${reco.shared.val} [your list: ${reco.shared.to} | his list: ${reco.shared.list}]`}</p>

      <p>--</p>

      <p><b>score prediction</b>: {`${reco.score.val} [s${reco.score.d}, d${reco.score.s}]`}</p>

      <p style={{cursor: 'pointer'}} onClick={() => {router.push('/about')}}><b>?!</b> learn how it works</p>

    </div >
  )
}