import styles from './style/buttons.module.css'

import { useRouter } from "next/router"

import { colorMap } from '../../resources/color-map/color-map';

//  types
import type { CSSProperties } from "react";
import type { colorsType } from '../../resources/color-map/color-map';

export default function NeonButton(btn: {
  color?: colorsType | 'none';
  children: React.ReactNode;
  href?: string;
  size?: 'small' | 'big'
  type?: "button" | "reset" | "submit";
  style?: CSSProperties,
  action?: (p?: any) => any;
}) {

  const router = useRouter();

  const link = btn.href;
  const external = link ? link.slice(0, 4) === 'http' : false;

  const handleClick = (e: any) => {
    if (link) external ? window.open(link, '_blank') : router.push(link);
    if (btn.action) btn.action(e);
  }

  const color = btn.color !== 'none' ?
    {
      "--color": colorMap[btn.color || 'blue'].normal,
      "--light": colorMap[btn.color || 'blue'].light,
    } as CSSProperties : {};

  const padding = btn.size == 'small' ? { padding: 0, } : {};

  return (
    <button className={styles.neon_button} style={{ ...color, ...padding, ...btn.style }} onClick={handleClick} type={btn.type} >
      {btn.children}
    </button>
  )
}
