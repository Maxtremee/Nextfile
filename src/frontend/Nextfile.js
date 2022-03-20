import { Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import AppBar from "./layout/AppBar"
import MainStyled from "./layout/MainStyled"
import FolderDrawer from "./layout/FolderDrawer"
import DrawerHeader from "./layout/DrawerHeader"
import FileView from "./files/FileView"
import OptionsBar from "./layout/OptionsBar"
import { useAppContext } from "./AppContext"

export default function Nextfile({ files }) {
  const { drawerOpen, theme } = useAppContext()

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <FolderDrawer files={files} />
      <MainStyled open={drawerOpen}>
        <DrawerHeader />
        <OptionsBar />
        <FileView files={files} />
      </MainStyled>
    </Box>
  )
}
