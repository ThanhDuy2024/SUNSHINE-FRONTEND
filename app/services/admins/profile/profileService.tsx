import { profileAdmin } from "@/app/api/admins/profileAdmin";

export const getProfileAdmin = async () => {
  const data = await fetch(profileAdmin, {
    method: "GET",
    credentials: "include",
  })
  return data.json();
}