import styles from './style/save.module.css'

export default function SaveIcon({ size }: { size?: "small" | "medium" | "large" }) {

  const sizes = {
    small: { width: '2rem', height: '2rem' },
    medium: { width: '4.5rem', height: '4.5rem' },
    large: { width: '7rem', height: '7rem' },
  }

  return (
    <svg style={size ? sizes[size] : sizes.medium} className={styles.save} x="0px" y="0px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path d="M205.9,62.9h-16.1v47.6c0,4.6-3.7,8.3-8.3,8.3h-70.5c-4.6,0-8.3-3.7-8.3-8.3V62.9H79.5c-9.2,0-16.7,7.5-16.7,16.7v140.7c0,9.2,7.5,16.7,16.7,16.7h140.7
        c9.2,0,16.7-7.5,16.7-16.7l0.9-125.2L205.9,62.9z M205.5,221.1H93.6v-48.8c0-8.2,6.7-14.9,14.9-14.9h82.1c8.2,0,14.9,6.7,14.9,14.9
        V221.1z"/>
      <rect className={styles.save_top} x="158.6" y="62.9" width="17.8" height="40" />
    </svg>
  )
}