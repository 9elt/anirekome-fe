import styles from '../style/recom.module.css'

import { colorMap, colorsType } from 'src/resources/color-map/color-map'
import TrashIcon from 'src/components/icons/trash/trash-icon'
import SaveIcon from 'src/components/icons/save/save-icon'
import Link from 'src/components/buttons/link'

import { useRouter } from 'next/router'

export default function RecoImage({ url, score, id, users }: {
  url: string,
  score: number,
  id: number,
  users: string[]
}) {

  const router = useRouter();

  const colors = [
    ['red', 6,],
    ['orange', 7,],
    ['yellow', 8,],
    ['blue', 9,],
    ['green', 10,],
  ];

  let sel = 'blue';
  for (const i in colors) {
    if (parseInt((score / 100).toString()) > colors[i][1]) { continue }
    sel = colors[i][0] as string;
    break;
  }

  const score_color = {
    "--color": colorMap[sel as colorsType].normal,
    "--light": colorMap[sel as colorsType].light,
  } as React.CSSProperties;

  const trash_color = {
    "--color": colorMap.red.normal,
    "--light": colorMap.red.light,
  } as React.CSSProperties;

  const details_color = {
    "--color": colorMap.blue.normal,
    "--light": colorMap.blue.light,
  } as React.CSSProperties;

  const pin_color = {
    "--color": colorMap[1==1 ? "black" : "yellow"].normal,
    "--light": colorMap[1==1 ? "black" : "yellow"].light,
  } as React.CSSProperties;

  return (
    <div className={styles.outer_container}>

      <div className={styles.image_container}>
        <img src={url} />
        <div className={styles.mal_link}>
          <h3 className={styles.reko_users_title}>recommended by</h3>
          <p className={styles.reko_users_subtitle}>username | affinity</p>
          {users.map((user, i) =>
            <Link key={i} href={`https://myanimelist.net/profile/${user}`}>
              <div className={styles.reko_users_container}>
                <h3 className={styles.reko_users}>{user.length > 12 ? `${user.slice(0,10)}..` : user}</h3>
                <h3 className={styles.reko_affinity}>87<span style={{ fontSize: '.8rem' }}>%</span></h3>
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
          <h3 className={styles.score}>{parseInt((score / 100).toString())}</h3>
        </div>
      </div>

      <div style={trash_color}>
        <div className={styles.delete_container} >
          <svg className={styles.border} viewBox='0 0 32 32'>
            <path d='M2,2 2,30 30,30 2,2Z' />
          </svg>
          <TrashIcon size='small' />
        </div>
      </div>

      <div style={details_color}>
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

      <div style={pin_color}>
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