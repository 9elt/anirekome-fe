import { useRouter } from "next/router";
import { useEffect } from "react";

//  global state
import { userState } from "../global-state/user";
import { useRecoilState } from 'recoil';

// components
import Recommendation from "../components/recommendation/recommendation";

//  types
import type { userAnimeRecosType, userUserRecosType } from '../global-state/user';

export default function Recommendations() {

  const router = useRouter();

  const [user] = useRecoilState(userState);

  useEffect(() => { if (!user.recommendations) router.push('/connect'); }, []);

  const recommendations: Array<userAnimeRecosType & userUserRecosType> = [];

  user.recommendations?.anime.forEach((reco) => {
    const u = user.recommendations?.users[reco.user];
    if (reco && u) recommendations.push({...reco, ...u});
  });

  return (

    <div className="container-84 center no-overflow">

      {recommendations.map((reco, i) => <Recommendation key={i} {...reco} />)}

    </div>
  )
}
