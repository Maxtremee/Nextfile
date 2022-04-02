import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export default function AppWrapper({ mode, setMode, children }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [view, setView] = useState("list")

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
  }

  const state = {
    drawerOpen,
    setDrawerOpen,
    view,
    setView,
    mode,
    toggleTheme,
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
