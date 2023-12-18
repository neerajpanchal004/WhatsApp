import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WhatsApp',
  description: 'WhatsApp-Clone',
}

export default function RootLayout({ children }) {
  return (
    <>
   
     <html lang="en">
    
    <body className={inter.className}> <Header/>{children}</body>
  </html>
    </>
   
  )
}
