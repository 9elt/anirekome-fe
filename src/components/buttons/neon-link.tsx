import styles from './style/buttons.module.css'
import { colorMap, colorsType } from '../../resources/color-map/color-map';

import { useRouter } from "next/router"
import { CSSProperties } from 'react';

export default function NeonLink(btn: {
  color?: colorsType | "none";
  children: React.ReactNode;
  href?: string;
  action?: (p?: any) => any;
}) {

  const router = useRouter();

  const link = btn.href;
  const external = link ? link.slice(0, 4) === 'http' : false;

  const handleClick = (e: any) => {
    if (link) external ? window.open(link, '_blank') : router.push(link);
    if (btn.action) btn.action(e);
  }

  let color = {};

  if (btn.color !== 'none') {
    color = {
      "--color": colorMap[btn.color || 'blue'].normal,
      "--light": colorMap[btn.color || 'blue'].light,
    } as React.CSSProperties;
  }

  return (
    <span className={styles.neon_link} style={color} onClick={handleClick} >
      {btn.children}
    </span>
  )
}