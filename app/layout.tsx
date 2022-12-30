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
      <body>
        <div className="flex justify-center bg-black text-gray-50">
          <div className="flex flex-col items-center w-full min-h-screen">
            <div className="z-20 w-full">
              <Header />
            </div>
            <div className="z-10 flex items-center justify-center flex-grow w-full mb-32 overflow-auto">{children}</div>
            <div className="z-10 w-full">
              {/* ts throws error because it doesnt expect async component! to be fixed soon.. */}
              {/* @ts-expect-error Server Component */}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
