import { ConflictError, UnauthorizedError } from "../errors/httperrors";
import { SignupBodyInterface } from "../interfaces/SignupBodyInterface";
import { UserModel } from "../models/UserModel";

export async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);
    if (response.ok) {
      return response;
    } else {
      const errorBody = await response.json();
      const errorMessage = errorBody.error;
      if (response.status === 401) {
        throw new UnauthorizedError(errorMessage);
      } else if (response.status === 409) {
        throw new ConflictError(errorMessage);
      } else {
        throw Error(
          "request failed with status code : " +
            response.status +
            " message: " +
            errorMessage
        );
      }
    }
  }

  export async function signupUser(
    credentials: SignupBodyInterface
  ): Promise<UserModel> {
    const response = await fetchData("/api/user/signup", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }