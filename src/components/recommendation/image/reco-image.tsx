import styles from '../style/recom.module.css'

export default function RecoImage({ url }: {
  url: string,
}) {

  return (
    <div className={styles.image_container}>
      <img src={url} />
    </div>
  )
}