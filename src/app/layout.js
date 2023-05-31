import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Cristopher Herrera',
    description: 'Portfolio',
}

const RootLayout = ({ children }) => {
  return (
      <html lang="en" className="scroll-smooth">
          <body>
          {children}
          </body>
      </html>
  )
}

export default RootLayout;
