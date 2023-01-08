import { useRouter } from "next/router";
import { useEffect } from "react";
import { userState } from "../global-state/user";
import { useRecoilState } from 'recoil';
import Recommendation from "../components/recommendation/recommendation";
import type { Reko } from "src/api/recommendations/types";

export default function Recommendations() {

  const router = useRouter();

  const [user] = useRecoilState(userState);
  useEffect(() => { if (!user.api) router.push('/'); }, []);

  const recommendations: Reko[] = user.api?.recommendations || [];
  const userNames = user.api?.users || [];

  const getUserNames = (r?: Reko) => r?.users.map(u => userNames[u]) || [];

  return (
    <div className="container-84 center no-overflow wrap">
      {recommendations?.map((reko, i) =>
        <Recommendation
          key={i}
          reko={reko}
          users={getUserNames(reko)}
        />
      )}
    </div>
  )
}
