import { useState } from "react"
import { Box } from "@mui/material"
import SearchAppBar from "./SearchAppBar"
import MainStyled from "./MainStyled"
import FolderDrawer from "./FolderDrawer"
import DrawerHeader from "./DrawerHeader"
import FileGrid from "../files/FileGrid"
import OptionsBar from "./OptionsBar"

export default function MainWrapper({ host, folderStructure }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [view, setView] = useState("grid")

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleChangeView = (_event, view) => {
    setView(view)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <SearchAppBar
        open={drawerOpen}
        onDrawerClose={handleDrawerClose}
        onDrawerOpen={handleDrawerOpen}
      />
      <FolderDrawer
        open={drawerOpen}
        folderStructure={folderStructure}
        onDrawerClose={handleDrawerClose}
      />
      <MainStyled open={drawerOpen}>
        <DrawerHeader />
        <OptionsBar view={view} onChangeView={handleChangeView} />
        <FileGrid folderStructure={folderStructure} host={host} />
      </MainStyled>
    </Box>
  )
}
