import styles from './style/inputs.module.css'
import { colorMap, colorsType } from '../../resources/color-map/color-map';

export default function Checkbox({ name, color, error, children, handleChange }: {
  name: string;
  color?: colorsType;
  error?: boolean;
  handleChange: (e: any) => any;
  children?: React.ReactNode;
}) {

  const colorVar = !error ? {
    "--color": colorMap[color || 'yellow'].normal,
    "--light": colorMap[color || 'yellow'].light,
  } as React.CSSProperties : {
    "--color": colorMap['red'].normal,
    "--light": colorMap['red'].light,
  } as React.CSSProperties ;

  return (

    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBlock: 8,
        ...colorVar,
      }}
    >

      <label>

        <input
          type="checkbox"
          name={name}
          onChange={handleChange}

          className={styles.checkbox}
          style={{ paddingRight: 10 }}
        />

        <span></span>

      </label>

      <div>
        {children}
      </div>

    </div>
  )
}