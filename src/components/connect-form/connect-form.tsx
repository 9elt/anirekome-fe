//  components
import NeonButton from "../buttons/neon-button"
import NeonLink from "../buttons/neon-link"
import NeonText from "../neon-text/neon-text"
import InputProgress from "../inputs/input-text-progress"
import Checkbox from "../inputs/checkbox"
import ConnectIcon from "../icons/connect/connect-icon"

//  form state
import useFormState from "./state/use"
import type { CSSProperties } from "react"

export default function ConnectForm() {

  const form = useFormState();

  const style: { [key: string]: CSSProperties } = {
    container: { marginInline: 'auto', width: '19rem' },
    form: { marginInline: 'auto', maxWidth: 252 },
    title: { textAlign: 'center', color: '#fff' },
    subtitle: { marginBottom: 32, textAlign: 'center', color: '#fffb' },
    input: { display: 'flex', justifyContent: 'space-between' },
    checkbox: { marginTop: '1.5rem', textAlign: 'justify' }
  }

  return (
    <form
      id="connect-user"
      style={style.container}
      onSubmit={form.handleSubmit}
    >
      <div style={style.form}>

        <NeonText color='blue'>
          <h3 style={style.title}>Try it now!</h3>
        </NeonText>

        <p style={style.subtitle}>Enter your MyAnimeList username down below</p>

        <NeonText color={form.errors.user_name ? 'red' : 'blue'}>
          <h2>
            {form.errors.user_name
              ? form.errors.user_name == 'error'
                ? 'MyAnimeList'
                : form.errors.user_name
              : 'MyAnimeList'
            }
          </h2>
        </NeonText>

        <div style={style.input}>
          <InputProgress
            active={form.submitting}
            name="user_name"
            placeholder="your MAL username"
            handleChange={form.handleChange}
          />

          <NeonButton
            type="submit"
            size="small"
            color={form.errors.user_name ? 'red' : 'blue'}
          >
            <ConnectIcon size="medium" />
          </NeonButton>
        </div>

      </div>

      <div style={style.checkbox}>
        <Checkbox
          name='policies'
          error={!!form.errors.policies}
          handleChange={form.handleChange}
        >
          I have read and accepted the
          <NeonLink
            href='/privacy'
            color={form.errors.policies ? 'none' : 'yellow'}
          >
            privacy policy terms
          </NeonLink>
        </Checkbox>
      </div>

    </form>
  )
}