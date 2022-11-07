// components
import NeonButton from "../buttons/neon-button";
import Recommendation from "./recommendation"

export default function Preview(recommendation: any) {

  const reco = { ...recommendation, isPreview: true };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>

      <Recommendation {...reco} />

      <NeonButton href="/recommendations" color="yellow" style={{marginTop: '1rem'}}>
        {'RECOMMENDATIONS >'}
      </NeonButton>

    </div>
  )
}
