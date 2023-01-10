import { userStateType } from "src/global-state/user";
import { readSession } from "./use";
import rekoApi from "src/api/recommendations/get-recomendations";

export async function try_reconnect(): Promise<userStateType> {
    const session = readSession();

    if (typeof session == "number") throw -1;

    const res = await rekoApi(session);

    return {
        user_name: session.user_name,
        api: res,
    }
}