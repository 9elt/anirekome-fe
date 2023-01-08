import styles from '../style/recom.module.css'

import { colorsType, color } from 'src/resources/color-map/color-map'
import TrashIcon from 'src/components/icons/trash/trash-icon'
import SaveIcon from 'src/components/icons/save/save-icon'
import Link from 'src/components/buttons/link'
import type { UsersInfo } from 'src/api/recommendations/types'

export default function RecoImage({ url, score, id, users }: {
  url: string,
  score: number,
  id: number,
  users: UsersInfo[]
}) {

  const scoreColors = {
    0: 'red',
    1: 'red',
    2: 'red',
    3: 'red',
    4: 'red',
    5: 'red',
    6: 'orange',
    7: 'yellow',
    8: 'blue',
    9: 'green',
    10: 'green',
  }

  const score_color = color(scoreColors[score as keyof typeof scoreColors] as colorsType)

  return (
    <div className={styles.outer_container}>

      <div className={styles.image_container}>
        <img src={url} />
        <div className={styles.mal_link}>
          <h3 className={styles.reko_users_title}>recommended by</h3>
          <p className={styles.reko_users_subtitle}>username | affinity</p>
          {users.map((user, i) =>
            <Link key={i} href={`https://myanimelist.net/profile/${user.user_name}`}>
              <div className={styles.reko_users_container}>
                <h3 className={styles.reko_users}>{user.user_name.length > 14 ? `${user.user_name.slice(0, 12)}..` : user.user_name}</h3>
                <h3 className={styles.reko_affinity}>{parseInt(`${user.affinity / 10}`)}<span style={{ fontSize: '.8rem' }}>%</span></h3>
              </div>
            </Link>
          )}
        </div>
      </div>

      <div style={score_color}>
        <div className={styles.score_container} style={score_color}>
          <svg className={styles.border} viewBox='0 0 32 32'>
            <path d='M30,30 30,2 2,30 30,30Z' />
          </svg>
          <h3 className={styles.score}>{score}</h3>
        </div>
      </div>

      <div style={color('red')}>
        <div className={styles.delete_container} >
          <svg className={styles.border} viewBox='0 0 32 32'>
            <path d='M2,2 2,30 30,30 2,2Z' />
          </svg>
          <TrashIcon size='small' />
        </div>
      </div>

      <div style={color('blue')}>
        <div className={styles.details_container} >
          <svg className={styles.border} viewBox='0 0 32 32'>
            <path d='M2,2 30,30 30,2 2,2Z' />
            <path className={styles.svg_arr} d='M22,5 27,10 27,5 22,5Z' />
          </svg>
          <Link href={`https://myanimelist.net/anime/${id}`}>
            <h4>MAL</h4>
          </Link>
        </div>
      </div>

      <div style={color('yellow')}>
        <div className={styles.pin_container} >
          <svg className={styles.border} viewBox='0 0 32 32'>
            <path d='M2,2 30,2 2,30 2,2Z' />
          </svg>
          <SaveIcon size='small' />
        </div>
      </div>

    </div>

  )
}