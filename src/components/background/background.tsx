import styles from './style/background.module.css'

export default function Background() {

  return (
    <>
      <img className={styles.background} src="/background_image.webp" alt="anime recommender app" />
      <img className={styles.overlay} src="/overlay_image.webp" />
    </>
  )
}