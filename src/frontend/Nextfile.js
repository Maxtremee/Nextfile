import { Box } from "@mui/material"
import SearchAppBar from "./layout/SearchAppBar"
import MainStyled from "./layout/MainStyled"
import FolderDrawer from "./layout/FolderDrawer"
import DrawerHeader from "./layout/DrawerHeader"
import FileView from "./files/FileView"
import OptionsBar from "./layout/OptionsBar"
import { useAppContext } from "./AppContext"

export default function Nextfile({ files }) {
  const { drawerOpen } = useAppContext()

  return (
    <Box sx={{ display: "flex" }}>
      <SearchAppBar />
      <FolderDrawer files={files} />
      <MainStyled open={drawerOpen}>
        <DrawerHeader />
        <OptionsBar />
        <FileView files={files} />
      </MainStyled>
    </Box>
  )
}
