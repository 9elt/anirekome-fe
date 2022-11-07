import styles from './style/home-about.module.css'

import NeonButton from "../buttons/neon-button"
import NeonText from "../neon-text/neon-text"

export default function HomeAbout() {

  return (

    <div className={styles.container}>

      <NeonText color="yellow">
        <h2>AniRekome is</h2>
      </NeonText>

      <p>
        an anime recommendation app that recommends you anime by <strong>matching your
          watch list</strong> to the watch lists of other <strong>users that have a similar taste</strong>.
      </p>

      <NeonText color="yellow">
        <h2>It is mainly intended for</h2>
      </NeonText>

      <p>
        those who have watched hundreds of anime, those who spend half an hour
        just to find an anime they get bored of after five minutes.
      </p>

      <NeonText color="yellow">
        <h2>The main idea</h2>
      </NeonText>

      <p>
        behind this app is not to find the greatest anime ever nor to spit out hundreds of
        recommendations that will end up in a plan to watch list forever, but to
        <strong> consistently and reliably recommend anime</strong> that you will enjoy.
      </p>

      <NeonButton href='/about' color='yellow'>
        more about
      </NeonButton>

      <NeonButton href='https://github.com/9elt/anirekome.git' color='blue'>
        GitHub source code
      </NeonButton>

    </div>

  )
}