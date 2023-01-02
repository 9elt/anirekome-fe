import styles from '../style/recom.module.css'

import { colorMap } from '../../../resources/color-map/color-map'
import { genresIDs } from 'src/resources/conversion/id-conversion';

export default function RecoGenres({ genres }: {
  genres: number[],
}) {

  const color = {
    "--color": colorMap['orange'].normal,
    "--light": colorMap['orange'].light,
  } as React.CSSProperties;

  return (
    <div className={styles.genres_container}>
      {genres?.map((genre, i) => (
        <p key={i} className={styles.genre} style={color} >{genresIDs[genre as keyof typeof genresIDs]}</p>
      ))}
    </div>
  )
}