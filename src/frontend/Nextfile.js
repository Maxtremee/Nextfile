import { Box } from "@mui/material"
import AppBar from "./layout/AppBar"
import MainStyled from "./layout/MainStyled"
import FolderDrawer from "./layout/FolderDrawer"
import DrawerHeader from "./layout/DrawerHeader"
import FileView from "./files/FileView"
import OptionsBar from "./layout/OptionsBar"

export default function Nextfile({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <FolderDrawer />
      <MainStyled>
        <DrawerHeader />
        <OptionsBar />
        {children}
      </MainStyled>
    </Box>
  )
}
