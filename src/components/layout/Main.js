import { Box } from "@mui/material"
import SearchAppBar from "./SearchAppBar"
import MainStyled from "./MainStyled"
import FolderDrawer from "./FolderDrawer"
import DrawerHeader from "./DrawerHeader"
import FileView from "../files/FileView"
import OptionsBar from "./OptionsBar"
import { useAppContext } from "../AppContext"

export default function MainWrapper({ files }) {
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
