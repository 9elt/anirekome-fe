import styles from './style/recom.module.css'

import { useState } from 'react'

//  components
import NeonButton from '../buttons/neon-button'

// import RecoStats from './stats/reco-stats'
import RecoTitle from './title/reco-title'
import RecoImage from './image/reco-image'
import RecoScore from './score/reco-score'
import RecoGenres from './genres/reco-genres'

import TrashIcon from '../icons/trash/trash-icon'

//  types
import type { Reko } from 'src/api/recommendations/types'
import { userState } from 'src/global-state/user'

export default function Recommendation({reko, users, isPreview}: {reko: Reko, users: string[], isPreview?: boolean}) {

  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  }

  if (!reko.details) {
    return <></>
  }

  return (
    <div key={reko.id} className={styles.container}>

      <div style={{ transform: showStats ? 'translateY(184px)' : '', transition: 'all 150ms ease-in-out' }}>

        <RecoTitle title={reko.details.title} />

        <RecoGenres genres={reko.details.genres} />

        <RecoImage 
        url={reko.details.picture} 
        score={reko.predictions.score} 
        id={reko.id}
        users={users}
         />

      </div>

    </div >
  )
}