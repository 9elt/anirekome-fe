import NeonText from '../../neon-text/neon-text'

export default function RecoTitle({ title }: {
  title: string,
}) {

  title = title.split('').length > 32 ? title.slice(0, 28) + '...' : title;

  return (
    <NeonText color='blue'>
      <h2>{title}</h2>
    </NeonText>
  )
}