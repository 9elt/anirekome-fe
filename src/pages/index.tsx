//  global state
import { userState } from "../global-state/user";
import { useRecoilState } from 'recoil';

//  components
import HomeAbout from "../components/home-about/home-about"
import ConnectForm from "../components/connect-form/connect-form"
import Preview from "../components/recommendation/preview";
import Loader from "src/components/loader/loader";

import { try_reconnect } from "src/session/reconnect";
import { useEffect, useState } from "react";

export default function Home() {

  const [user, setUser] = useRecoilState(userState);
  const [sessionCheck, setSessionCheck] = useState(false);

  useEffect(() => {
    if (!user.api) {
      const connect = async () => {
        try {
          let res = await try_reconnect()
          setUser(res)
          setSessionCheck(true)
        } catch (e) {
          setSessionCheck(true)
        }
      }
      connect()
    } else {
      setSessionCheck(true)
    }
  }, [])

  const preview = user.api?.recommendations[0];
  const rekousers = preview?.users.map(u => user.api?.users[u] || { user_name: '', affinity: 0 }) || [];

  return (
    <div className="container-64 center">
        <>
          <HomeAbout />
          {sessionCheck 
            ? preview
                ? <Preview reko={preview} users={rekousers} />
                : <ConnectForm />
            : <Loader />
          }
        </>
    </div>
  )
}
