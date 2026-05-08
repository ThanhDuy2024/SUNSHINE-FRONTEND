/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllShip = async (search: any, status: any, page: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/shipping/list?page=${page}&limit=10&search=${search}&status=${status}`, {
    method: "GET",
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const postShipping = async (shippingData: any) => {
  const res = await fetch("http://localhost:4000/api/admin/shipping/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(shippingData),
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const detailShipping = async (id: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/shipping/detail/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const updateShipping = async (id: any, shippingData: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/shipping/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(shippingData),
    credentials: "include"
  });

  const data = await res.json();

  return data;
}