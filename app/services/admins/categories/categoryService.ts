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

export const postCategories = async (formData: any) => {
  const res = await fetch("http://localhost:4000/api/admin/category/create", {
    method: "POST",
    body: formData,
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const getCategoryDetail = async (id: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/category/detail/${id}`, {
    method: "GET",
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const updateCategory = async (dataUpdate: any, id: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/category/update/${id}`, {
    method: "PUT",
    body: dataUpdate,
    credentials: "include"
  });

  const data = res.json();

  return data;
}