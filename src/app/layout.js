import './globals.css';
import { Inter } from 'next/font/google';
import Favicon from "../../public/favicon.ico"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockchain for Executives',
  description: 'Your favorite blockchain podcast is now available.',
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    title: 'Blockchain for Executives',
    description: 'Your favorite blockchain podcast is now available.',
    images: [
      { url: '../../metadata_img.png', width: 1200, height: 630 },
      {
        url: '../../metadata_img.png',
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
    description: 'Your favorite blockchain podcast is now available.',
    siteId: 'BlockForExec',
    creator: '@BlockForExec',
    creatorId: 'hBlockForExec',
    images: {
      url: '../../metadata_img.png',
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
