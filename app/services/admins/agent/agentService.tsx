/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllAgent = async (search: any, status: any, page: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/agent/list?search=${search}&status=${status}&page=${page}&limit=10`, {
    method: "GET",
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const getAgentDocument = async (search: any, page: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/agent/list?status=notAc&search=${search}&page=${page}&limit=10`, {
    method: "GET",
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const acceptOrDenyAgent = async (dataUpdate: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/agent/action`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataUpdate),
    credentials: "include"
  });

  const data = await res.json();

  return data;
}