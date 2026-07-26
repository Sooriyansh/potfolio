import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function proxy(req) {
  const token = req.cookies.get('admin_session')?.value;
  if (!token) return NextResponse.redirect(new URL('/admin/login', req.url));
  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}

export const config = { matcher: ['/admin/dashboard/:path*'] };
