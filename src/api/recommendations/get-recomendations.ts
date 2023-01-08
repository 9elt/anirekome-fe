import { errorMessages } from "./error-messages";
import type { errorCode } from "./error-messages";
import type { APIresponse, APIrequest } from "./types";
import type { formValues } from "../../components/connect-form/state/types";
import { cookieSession } from "src/session/use";

export class ApiError {
  code: number;
  msg: string;
  constructor(code: number) {
    this.code = code;
    this.msg = code in errorMessages
    ? errorMessages[code as errorCode]
    : errorMessages["_"];
  }
}

export default async function getRecommendationsApi(data: cookieSession): Promise<APIresponse> {

  const res = await fetch(
    `http://localhost:3000/recommendations/${data.user_name}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data.next_request),
    }
  );

  if (res.ok) {
    const resj = await res.json();

    console.log("Reko API\nresponse -> ", resj);
    return resj;
  } else {
    throw new ApiError(res.status);
  }
}

export async function formApi(data: formValues): Promise<APIresponse> {
  const body: APIrequest = {
    accuracy: 100,
    banned_ids: [],
    banned_users: [],
    force_list_update: false,
  }

  return getRecommendationsApi({user_name: data.user_name, next_request: body})
}