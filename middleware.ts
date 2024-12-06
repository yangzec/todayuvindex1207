// import { locales } from "./lib/i18n";

// import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const isExit = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (isExit) return;

//   request.nextUrl.pathname = `/`;
//   return Response.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|terms|.*\\.(?:txt|xml|ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)'
//   ]
// };

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const locales = ['en', 'zh', 'ja', 'ar', 'es', 'ru']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 如果是根路径，不进行重定向
  if (pathname === '/') {
    return NextResponse.next()
  }

  // 检查是否已经包含语言前缀
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果已经包含语言前缀，不进行重定向
  if (hasLocale) {
    return NextResponse.next()
  }

  // 只有不在根路径且没有语言前缀的URL才重定向到根路径
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|terms|.*\\.(?:txt|xml|ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)'
  ]
}