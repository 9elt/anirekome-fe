import { CSSProperties } from 'react'
import styles from './style/logo.module.css'

export default function Logo(props: {
  style?: CSSProperties;
  neon?: boolean;
}) {

  return (
    <svg
      className={props.neon ? styles.neon_logo : ''}
      style={props.style}
      x="0px" y="0px"
      viewBox={`0 0 55 ${props.neon ? '71' : '61'}`}
    >
      <path d="M45.7,8.6H9.3C8.8,8.6,8.5,9,8.5,9.4v52.2c0,0.4,0.4,0.8,0.8,0.8h5.4c-0.3-1.2,0.1-2.7,1.8-3c-1.1-4.5-1.8-14.8,0.4-22
        c1.9-5.9,2.2-10.5,5.8-15.6c0-1.5,0-6.8,1.9-10c0,0,1.9,3.8,3.4,5.7c2.2-0.9,4.9-1.2,7.3,1.1c1.1-0.5,4-2,5.1-3
        c1.2-1.1-1.8,4.8-2.8,6.4c3,6.8-1.4,13.7-8.3,13.7c-1.8,0-1.9,0.1-1.9,0.1s-2.2,2.1,2.9,4.1c10.2,3.9,9.8,14,7.4,19
        c0.8,0,1.6,0.3,2.4,1.1c1,1.2,0.5,2.4,0.5,2.4h5.2c0.4,0,0.8-0.4,0.8-0.8V9.4C46.5,9,46.2,8.6,45.7,8.6z"/>
    </svg>
  )
}