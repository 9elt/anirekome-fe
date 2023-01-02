import styles from './style/home-about.module.css'

import NeonButton from "../buttons/neon-button"
import NeonText from "../neon-text/neon-text"
import GitHubIcon from '../icons/github/github-icon'

export default function HomeAbout() {

  return (

    <div className={styles.container}>

      <NeonText color="blue">
        <h2>Reko API</h2>
      </NeonText>

      <p>
        Reko API is an Open Web API that provides <strong>anime recommendations </strong>
        to MyAnimeList users.
      </p>

      <NeonText color="blue">
        <h2>Recommendations</h2>
      </NeonText>

      <p>
        To provide reliable recommendations, Reko API <strong>matches similar users</strong>,
        and takes the anime that they are more likely to enjoy out of their respective lists.
      </p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>To learn how it works checkout the</p>

        <NeonButton
          href='https://github.com/9elt/Reko'
          size='small'
          style={{ padding: '2px 8px', marginLeft: '1rem' }}
          color='yellow'
        >
          <GitHubIcon style={{ marginRight: '3px', width: '.8rem' }} />
          Source Code
        </NeonButton>

      </div>

      <NeonText color="blue">
        <h2>Implementation</h2>
      </NeonText>

      <p>
        If you are willing to <strong>implement</strong> Reko API
        <strong> on your website or App</strong>
      </p>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>please read the</p>

        <NeonButton
          href='/docs'
          size='small'
          style={{ padding: '2px 8px', marginInline: '1rem' }}
          color='yellow'
        >
          API Documentation
        </NeonButton>

        <p>and the</p>

        <NeonButton
          href='/tos'
          size='small'
          style={{ padding: '2px 8px', marginLeft: '1rem' }}
          color='yellow'
        >
          API Terms of Service
        </NeonButton>
      </div>


    </div>

  )
}