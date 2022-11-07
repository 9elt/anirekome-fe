import { useRouter } from "next/router";
import { useEffect } from "react";

//  global state
import { userState } from "../global-state/user";
import { useRecoilState } from 'recoil';

//  form
import ConnectForm from "../components/connect-form/connect-form"

export default function Connect() {

  const router = useRouter();
  const [user] = useRecoilState(userState);

  useEffect(() => { if (user.recommendations) router.push('/recommendations'); }, []);

  return (

    <div className="container-64 center">
      <ConnectForm />
    </div>
  )
}
