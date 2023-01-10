import { errorMessages } from "./error-messages";
import { cookieSession } from "src/session/use";
import type { errorCode } from "./error-messages";
import type { APIresponse } from "./types";

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

export default async function rekoApi(data: cookieSession): Promise<APIresponse> {

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
