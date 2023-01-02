import styles from '../style/recom.module.css'

import { colorMap, colorsType } from '../../../resources/color-map/color-map'

export default function RecoScore({ score }: {
  score: number,
}) {

  const colors = [
    ['red', 6,],
    ['orange', 7,],
    ['yellow', 8,],
    ['blue', 9,],
    ['green', 10,],
  ];

  let sel = 'blue';
  for (const i in colors) {
    if (score > colors[i][1]) { continue }
    sel = colors[i][0] as string; 
    break;
  }

  const color = {
    "--color": colorMap[sel as colorsType].normal,
    "--light": colorMap[sel as colorsType].light,
  } as React.CSSProperties;

  return (
    <div className={styles.score_container} style={color}>
      <h3 className={styles.score}>{score / 100}</h3>
      <h5>SCORE PREDICTION</h5>
    </div>
  )
}