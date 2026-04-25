import { loginApi } from "@/app/api/admins/authAdmin";

export interface LoginData {
  email: string;
  password: string;
}
export const LoginService = async (data: LoginData) => {
  const login = await fetch(loginApi, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
    body: JSON.stringify(data)
  })
  return login.json();
}