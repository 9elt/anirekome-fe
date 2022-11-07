import styles from './style/inputs.module.css'

export default function InputProgress({ name, placeholder, handleChange, active }: {
  name: string;
  placeholder?: string;
  handleChange: (e: any) => any;
  active?: boolean;
}) {

  const className = `${styles.input_progress} ${active && styles.active}`

  return (
    <div className={styles.container} style={{maxWidth: 252, width: '100%'}}>

      <div id={`${name}-input-progress`} className={className}></div>

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}

        className={styles.input}
      />
  
    </div>
  )
}