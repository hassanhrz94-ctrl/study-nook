'use server';

import { headers } from 'next/headers';
import { auth } from '../auth';

export const addRoom = async (formData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const modifiedData = Object.fromEntries(formData.entries());
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(modifiedData),
  });
  if (!res.ok) return null;
  const data = await res.json();

  return data;
};
export const deleteEnrollment = async (id, token) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const text = await res.text(); 

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.log("Invalid JSON response:", text);
      return null;
    }

    if (!res.ok) return null;

    return data;
  } catch (err) {
    console.log("Delete error:", err);
    return null;
  }
};