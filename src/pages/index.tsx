//  global state
import { userState } from "../global-state/user";
import { useRecoilState } from 'recoil';

//  components
import HomeAbout from "../components/home-about/home-about"
import ConnectForm from "../components/connect-form/connect-form"
import Preview from "../components/recommendation/preview";

export default function Home() {

  const [user] = useRecoilState(userState);

  const preview = user.recommendations?.recommendations[0];
  const rekousers = preview?.users.map(u => user.recommendations?.users[u] || '') || [];

  return (
    <div className="container-64 center">

      <HomeAbout />
      {preview
        ? <Preview reko={preview} users={rekousers} />
        : <ConnectForm />
      }

    </div>
  )
}
