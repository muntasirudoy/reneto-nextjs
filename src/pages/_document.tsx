import Footer from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ThemeProvider } from '@/hooks/useTheme'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider>
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </ThemeProvider>
      </body>
    </Html>
  )
}
