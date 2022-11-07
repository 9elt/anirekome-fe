import styles from './style/inputs.module.css'

export default function InputText({ name, placeholder, handleChange }: {
  name: string;
  placeholder?: string;
  handleChange: (e: any) => any;
}) {

  return (
    <div style={{maxWidth: 252, width: '100%'}}>

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