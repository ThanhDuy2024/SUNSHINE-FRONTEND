import { categoryAdmin } from "@/app/api/admins/categoriesAdmin";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllCategory = async (status: string, search: any, page: any) => {
  const api = categoryAdmin(status, search, page);
  const response = await fetch(api, {
    method: "GET",
    credentials: "include"
  });
  return response.json();
}