export const errorMessages = {
  403: "user list is private",
  404: "user not found",
  429: "rate limited",
  500: "server error",
  _: "an error occurred"
}

export type errorCode = keyof typeof errorMessages; 