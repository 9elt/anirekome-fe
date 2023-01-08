import NeonButton from "../buttons/neon-button";
import Recommendation from "./recommendation"
import type { Reko, UsersInfo } from "src/api/recommendations/types";

export default function Preview({reko, users}: {reko: Reko; users: UsersInfo[]}) {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>

      <Recommendation reko={reko} users={users} />

      <NeonButton href="/recommendations" color="yellow" style={{marginTop: '1rem'}}>
        Your Recommendations &gt;
      </NeonButton>

    </div>
  )
}
