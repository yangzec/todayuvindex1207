import { SiteConfig } from "@/types/siteConfig";

const OPEN_SOURCE_URL = 'https://todayuvindex.com/'

const baseSiteConfig = {
  name: "UV Index Today",
  description:
    "UV Index Today - Real-time global UV index monitoring tool. Get accurate UV forecasts, sun protection recommendations, and outdoor activity guidance to protect your skin health effectively.",
  url: "https://todayuvindex.com/",
  ogImage: "https://todayuvindex.com/og.png",
  metadataBase: '/',
  keywords: ["UV index today",
    "today UV index", 
    "current UV index",
    "UV radiation level",
    "sun protection",
    "UV forecast",
    "UV index near me",
    "skin protection",
    "sun safety",
    "outdoor UV level"],
  authors: [
    {
      name: "todayuvindex",
      url: "https://todayuvindex.com",
      twitter: 'https://twitter.com/todayuvindex',
    }
  ],
  creator: '@weijunext',
  openSourceURL: 'https://github.com/yangzec/todayuvindex1207',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    // { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    // { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    // { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail },
    // { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    // { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    // { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    // { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    // { url: 'https://phcopilot.ai/', name: 'Product Hunt Copilot' },
    // { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    // { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    // { url: 'https://weijunext.com/', name: 'J实验室' },
    // { url: 'https://nextjscn.org/', name: 'Next.js 中文文档' },
    // { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    // { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
