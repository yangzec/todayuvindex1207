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

// 定义支持的语言
const locales = ['en', 'zh', 'ja', 'ar', 'es', 'ru']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 如果访问的是静态资源或API，直接放行
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 检查当前路径是否已经包含语言前缀
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`)
  )

  // 如果已经有语言前缀，直接放行
  if (hasLocale) {
    return NextResponse.next()
  }

  // 默认重定向到英文
  const url = new URL(`/en${pathname}`, request.url)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}