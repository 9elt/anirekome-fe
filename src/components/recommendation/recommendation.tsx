import styles from './style/recom.module.css'
import NeonText from '../neon-text/neon-text'
import RecoImage from './image/reco-image'
import { color } from 'src/resources/color-map/color-map'
import { genresNames, genreID } from 'src/resources/conversion/id-conversion';
import type { Reko, UsersInfo } from 'src/api/recommendations/types'

export default function Recommendation({ reko, users }: { reko: Reko, users: UsersInfo[] }) {

  const title = (t: string) => t?.length > 24 ? `${t.slice(0, 21)}...` : t;
  const genres = reko.details.genres;

  return (
    <div key={reko.id} className={styles.container}>

      <NeonText color='blue'>
        <h2>{title(reko.details.title)}</h2>
      </NeonText>

      <div className={styles.genres_container}>
        {genres?.map((genre_id, i) => (
          <p
            key={i}
            className={styles.genre}
            style={color('orange')}
          >
            {genresNames[genre_id as genreID]}
          </p>
        ))}
      </div>

      <RecoImage
        url={reko.details.picture}
        score={reko.predictions.score}
        id={reko.id}
        users={users}
      />
    </div >
  )
}