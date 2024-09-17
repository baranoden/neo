import { userCredentials } from "./authType";

export const loginService = ({ email, password }: userCredentials) => {
  const validEmail = "test";
  const validPassword = "test";

  if (email === validEmail && password === validPassword) {
    return { email: validEmail, password: validPassword };
  } else {
    throw new Error("Login failed: Invalid email or password");
  }
};
