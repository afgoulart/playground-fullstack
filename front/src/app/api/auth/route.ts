import HttpStatusCodes from 'http-status-codes';
import { cookies as Cookies } from 'next/headers';
import { NextResponse } from "next/server";
import fetch from 'node-fetch';

const API_BASE_URL = 'http://localhost:3001'

// GET  http://localhost:3001/auth
// x-auth-token: {{token}}
export async function GET(req: Request) {
  const cookies = Cookies()
  const token = cookies.get('user-token')?.value || '';

  const headers = new Headers()
  headers.set('x-auth-token', token);

  const userData = await fetch(`${API_BASE_URL}/auth`, {
    method: "GET",
    headers
  })

  return NextResponse.json({
    msg: 'olá mundo',
    cookies,
    token,
    userData
  });
}

