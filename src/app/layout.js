import './globals.css';
import { Inter } from 'next/font/google';
import Favicon from "../../public/favicon.ico"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockchain for Executives',
  description: 'Podcast on tech and business made for Entrepreneurs.',
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    title: 'Blockchain for Executives',
    description: 'Podcast on tech and business made for Entrepreneurs.',
    url: 'https://bfe-website-next.vercel.app/',
    images: [
      { url: 'https://bfe-website-next.vercel.app/metadata_img.png', width: 1200, height: 630 },
      {
        url: 'https://bfe-website-next.vercel.app/metadata_img.png',
        width: 1200,
        height: 630,
        alt: 'Blockchain for Executives logo',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain for Executives',
    description: 'Podcast on tech and business made for Entrepreneurs.',
    siteId: 'BlockForExec',
    creator: '@BlockForExec',
    creatorId: 'BlockForExec',
    images: {
      url: 'https://bfe-website-next.vercel.app/metadata_img.png',
      alt: 'Blockchain for Executives logo',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
