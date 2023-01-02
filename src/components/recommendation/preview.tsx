// components
import NeonButton from "../buttons/neon-button";
import Recommendation from "./recommendation"
import type { Reko } from "src/api/recommendations/types";

export default function Preview({reko, users}: {reko: Reko, users: string[]}) {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>

      <Recommendation {...{reko: reko, users: users, isPreview: true}} />

      <NeonButton href="/recommendations" color="yellow" style={{marginTop: '1rem'}}>
        {'Your Recommendations >'}
      </NeonButton>

    </div>
  )
}
