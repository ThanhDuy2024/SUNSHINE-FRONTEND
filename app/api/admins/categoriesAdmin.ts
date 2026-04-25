/* eslint-disable @typescript-eslint/no-explicit-any */
import { mainApi } from "../index.api";

export const categoryAdmin = (status: string, search: any, page: any) => {
  const api = `${mainApi}/api/admin/category/list?search=${search}&status=${status}&updatedById=&createdById=&page=${page}&limit=10`
  return api
}