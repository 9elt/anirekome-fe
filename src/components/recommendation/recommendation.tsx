import styles from './style/recom.module.css'

import { useState } from 'react'

//  components
import NeonButton from '../buttons/neon-button'

import RecoStats from './stats/reco-stats'
import RecoTitle from './title/reco-title'
import RecoImage from './image/reco-image'
import RecoScore from './score/reco-score'
import RecoGenres from './genres/reco-genres'

import TrashIcon from '../icons/trash/trash-icon'

//  types
import type { userAnimeRecosType, userUserRecosType } from '../../global-state/user'

export default function Recommendation(reco: userAnimeRecosType & userUserRecosType & { isPreview?: boolean }) {

  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  }

  return (
    <div key={reco.id} className={styles.container}>

      {!reco.isPreview && <RecoStats reco={reco} toggle={toggleStats} isShown={showStats} />}

      <div style={{ transform: showStats ? 'translateY(184px)' : '', transition: 'all 150ms ease-in-out' }}>

        <RecoTitle title={reco.title} />

        <RecoGenres genres={reco.genres} />

        <RecoImage url={reco.picture} />

        <RecoScore score={reco.score.val} />

        {!reco.isPreview &&

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

            <NeonButton color='MAL' href={`https://myanimelist.net/anime/${reco.id}`}>
              <p>MyAnimeList</p>
            </NeonButton>

            <NeonButton color='red' size='small'>

              <div style={{ display: 'flex', alignItems: 'center', }}>
                <TrashIcon size='small' />
                <p style={{ margin: 8 }}>DELETE</p>
              </div>

            </NeonButton >

          </div>
        }
      </div>

    </div >
  )
}