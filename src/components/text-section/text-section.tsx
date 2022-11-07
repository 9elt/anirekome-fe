import styles from './style/text.module.css'

export default function TextSection({children}: any) {

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  )
}