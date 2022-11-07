//  components
import NeonButton from "../buttons/neon-button"
import NeonLink from "../buttons/neon-link"
import NeonText from "../neon-text/neon-text"
import InputText from "../inputs/input-text"
import InputProgress from "../inputs/input-text-progress"
import Checkbox from "../inputs/checkbox"

import ConnectIcon from "../icons/connect/connect-icon"

//  form state
import useFormState from "./form-state/connect-form-state"

export default function ConnectForm() {

  const form = useFormState();

  return (
    <form
      id="connect-user"
      style={{ marginInline: 'auto', width: '19rem' }}
      onSubmit={form.handleSubmit}
    >

      <div style={{ marginInline: 'auto', maxWidth: 252 }}>

        <NeonText color={!!form.errors.alphaKey ? 'red' : 'blue'}>

          <h2>{
            !!form.errors.alphaKey ?
              form.errors.alphaKey == 'error' ?
                'Alpha Key' : form.errors.alphaKey
              : 'Alpha Key'
          }</h2>

        </NeonText>

        <p style={{ marginBottom: 8 }}>
          anirekome is in alpha testing state,
          <NeonLink href='/contact' color='yellow'> request an access key</NeonLink>
          to the dev
        </p>

        <InputText name="alphaKey" placeholder="alpha testing access key" handleChange={form.handleChange} />

        <NeonText color={!!form.errors.userName ? 'red' : 'blue'}>
          <h2>{
            !!form.errors.userName ?
              form.errors.userName == 'error' ?
                'MyAnimeList' : form.errors.userName
              : 'MyAnimeList'
          }</h2>
        </NeonText>

        <div style={{ display: 'flex', justifyContent: 'space-between'}}>

          <InputProgress active={form.submitting} name="userName" placeholder="MAL username" handleChange={form.handleChange} />

          <NeonButton type="submit" size="small" color={!!form.errors.userName ? 'red' : 'blue'}>
            <ConnectIcon size="medium" />
          </NeonButton>

        </div>
      </div>

      <div style={{ marginTop: '1.5rem', textAlign: 'justify' }}>

        <Checkbox name='ptw' handleChange={form.handleChange} error={!!form.errors.ptw}>
          include entries that I plan to watch
        </Checkbox>

        <Checkbox name='policies' handleChange={form.handleChange} error={!!form.errors.policies}>
          I&apos;ve read and accepted the
          <NeonLink href='/terms' color={!!form.errors.policies ? 'none' : 'yellow'}> terms of service </NeonLink>
          and the
          <NeonLink href='/privacy' color={!!form.errors.policies ? 'none' : 'yellow'}> privacy policy terms</NeonLink>
        </Checkbox>

      </div>

    </form>
  )
}