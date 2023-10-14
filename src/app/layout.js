import './globals.css';
import { Inter } from 'next/font/google';
import Favicon from "../../public/favicon.ico"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockchain for Executives',
  description: 'Your favorite blockchain podcast is now available.',
  icons: [{ rel: 'icon', url: Favicon.src }],
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
