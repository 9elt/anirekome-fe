import NeonText from '../../neon-text/neon-text'

export default function RecoTitle({ title }: {
  title: string,
}) {

  title = title?.length > 24 ? `${title.slice(0, 21)}...` : title;

  return (
    <NeonText color='blue'>
      <h2>{title}</h2>
    </NeonText>
  )
}