import Router from "next/router"
import Head from "next/head"
import PropTypes from "prop-types"
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"
import createEmotionCache from "../src/createEmotionCache"
import NProgress from "nprogress"
import AppContext from "../src/frontend/AppContext"
import "../styles/nprogress.css"

//Binding route events to show loading bar
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <AppContext>
          <Component {...pageProps} />
        </AppContext>
      </CacheProvider>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
