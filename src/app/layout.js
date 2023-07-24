//parent component use by other component
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter,Roboto, poppins } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sachin",
  description: "description here",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
        <div className="container">
        <Navbar/>
        {children}
        <Footer/>
        </div>
          </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
