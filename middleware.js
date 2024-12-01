import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_AUTH_SECRET,
  });

  const currentUrl = req.nextUrl;

  // client side redirect

  if (
    token &&
    token.role !== "admin" &&
    currentUrl.pathname.startsWith("/register")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    token &&
    (currentUrl.pathname.startsWith("/login") || currentUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/generate", req.url));
  }

  if (!token && currentUrl.pathname.startsWith("/generate")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/", "/register", "/login", "/generate"],
};
