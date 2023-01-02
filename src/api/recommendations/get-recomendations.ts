import { errorMessages } from "./error-messages";
import type { errorCode } from "./error-messages";
import type { APIresponse } from "./types";
import type { formValues } from "../../components/connect-form/state/types";

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

export default async function getRecommendationsApi(data: formValues): Promise<APIresponse> {
  const res = await fetch(`http://localhost:3000/recommendations/${data.user_name}`);

  if (res.ok) {
    const resj = await res.json();
    console.log("API response: ", resj);
    return resj;
  } else {
    throw new ApiError(res.status);
  }
}
