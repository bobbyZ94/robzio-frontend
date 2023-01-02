import './globals.css'
import './hamburger.css'
import { Montserrat } from '@next/font/google'
import Footer from '../components/Footer'
import Header from '../components/Header'

const inter = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black text-gray-50 scrollbar-none scroll-smooth">
        <div className="">
          <Header />
        </div>

        <div className="z-10">{children}</div>
      </body>
    </html>
  )
}
