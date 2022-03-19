import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export default function AppWrapper({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [view, setView] = useState("list")

  const state = {
    drawerOpen,
    setDrawerOpen,
    view,
    setView,
  }

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
