//  global state
import { userState, userStateType } from "src/global-state/user";
import { useSetRecoilState } from 'recoil';

import { readSession } from "./use";
import getRecommendationsApi from "src/api/recommendations/get-recomendations";
import { useEffect } from "react";
import { ApiError } from "next/dist/server/api-utils";
import { APIresponse } from "src/api/recommendations/types";

export async function try_reconnect(): Promise<userStateType> {

    const session = readSession();
    if (typeof session == "number") throw ApiError;

    console.log(session)

    const res: APIresponse = await getRecommendationsApi(session);

    return {
        user_name: session.user_name,
        api: res,
    };

    // useEffect(() => {
    //     const setUser = useSetRecoilState(userState);
    //     setUser({
    //         user_name: session.user_name,
    //         api: res,
    //     });
    // }, []);



    // setSession({
    //     user_name: session.user_name,
    //     next_request: res.next_request,
    // });
}