import styles from './style/neon-text.module.css'
import { colorMap, colorsType } from '../../resources/color-map/color-map';

export default function NeonText(text: {
  color?: colorsType;
  children: React.ReactNode;
}) {

  const color = {
    "--color": colorMap[text.color || 'white'].normal,
    "--light": colorMap[text.color || 'white'].light,
  } as React.CSSProperties;

  return (
    <span className={styles.neon} style={color}>
      {text.children}
    </span>
  )
}