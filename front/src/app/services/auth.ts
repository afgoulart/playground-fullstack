import { redirect } from "next/navigation"
import { RegisterUserProps } from "../types"



export const RegisterUser = async ({ name, email, password }: RegisterUserProps) => {
  console.log('props:', name, email, password)
  const resp = await fetch('/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, email, password
    })
  })

  if (!resp.ok) {
    return {
      error: {
        status: resp.status,
        message: resp.statusText
      }
    }
  }

  const userData = await resp.json();
  localStorage.setItem('user-token', userData.token)
  return userData
}

export const Logout = () => {
  localStorage.removeItem('user-token')
  redirect('/auth')
}