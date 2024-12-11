import React from 'react'
import Head from 'next/head'
import theme from '@/utils/theme'
import { ThemeProvider } from '@mui/styles'
import { CssBaseline } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import '@/styles/globals.css'

const App = (props: any) => {
  const { Component, pageProps } = props

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  )
}

export default App
