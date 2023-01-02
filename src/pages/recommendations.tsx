import { useRouter } from "next/router";
import { useEffect } from "react";

//  global state
import { userState } from "../global-state/user";
import { useRecoilState } from 'recoil';

// components
import Recommendation from "../components/recommendation/recommendation";

//  types
import type { Reko } from "src/api/recommendations/types";

export default function Recommendations() {

  const router = useRouter();

  const [user] = useRecoilState(userState);

  useEffect(() => { if (!user.recommendations) router.push('/connect'); }, []);

  const recommendations: Reko[] = user.recommendations?.recommendations || [];
  const users = user.recommendations?.users || [];
  const getRekoUsers = (r?: Reko): string[] => {
    return r?.users.map(u => users[u]) || []
  };

  return (
    <div className="container-84 center no-overflow wrap">
      {recommendations?.map((reko, i) => {
        return i < 12
          ? <Recommendation key={i} {...{ reko: reko, users: getRekoUsers(reko) }}/>
          : <></>
      }
      )}
    </div>
  )
}
