import styles from './style/trash.module.css'

export default function TrashIcon({size}: {size?: "small" | "medium" | "large"}) {

  const sizes = {
    small: {width: '2rem', height: '2rem'},
    medium: {width: '4.5rem', height: '4.5rem'},
    large: {width: '7rem', height: '7rem'},
  }

  return (
    <svg style={size? sizes[size] : sizes.medium} className={styles.trash} x="0px" y="0px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" >
      <path className={styles.trash_cover} d="M215,64.7h-39.5v-1.6c0-2.4-2-4.4-4.4-4.4H130c-2.4,0-4.4,2-4.4,4.4v1.6H85c-2.4,0-4.4,2-4.4,4.4v20.8c0,2.4,2,4.4,4.4,4.4h130c2.4,0,4.4-2,4.4-4.4V69.1C219.4,66.7,217.4,64.7,215,64.7z"/>
      <path d="M206.9,104.4H93.7c-3.1,0-5.6,2.5-5.6,5.6v125.7c0,3.1,2.5,5.6,5.6,5.6h113.2c3.1,0,5.6-2.5,5.6-5.6V110C212.5,106.9,210,104.4,206.9,104.4z M127.8,225.2c0,2.1-1.7,3.9-3.9,3.9h-8c-2.1,0-3.9-1.7-3.9-3.9V120.4c0-2.1,1.7-3.9,3.9-3.9h8c2.1,0,3.9,1.7,3.9,3.9V225.2z M158,225c0,2.1-1.7,3.9-3.9,3.9h-8c-2.1,0-3.9-1.7-3.9-3.9V120.2c0-2.1,1.7-3.9,3.9-3.9h8c2.1,0,3.9,1.7,3.9,3.9V225z M188.4,225c0,2.1-1.7,3.9-3.9,3.9h-8c-2.1,0-3.9-1.7-3.9-3.9V120.2c0-2.1,1.7-3.9,3.9-3.9h8c2.1,0,3.9,1.7,3.9,3.9V225z" />
    </svg>
  )
}