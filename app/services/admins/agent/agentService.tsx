/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllAgent = async (search: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/agent/list?status=&search=${search}`, {
    method: "GET",
    credentials: "include"
  });

  const data = await res.json();

  return data;
}

export const getAgentDocument = async (search: any) => {
  const res = await fetch(`http://localhost:4000/api/admin/agent/list?status=notAc&search=${search}`, {
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