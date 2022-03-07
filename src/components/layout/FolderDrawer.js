import path from "path"
import { styled, useTheme } from "@mui/material/styles"
import { Drawer, IconButton, Divider, Box } from "@mui/material"
import { TreeView, TreeItem } from "@mui/lab"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { drawerWidth } from "./constants"
import { useRouter } from "next/router"

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const CenterLabel = ({ name, path: filePath }) => {
  const router = useRouter()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {name}
      <IconButton
        onClick={() => {
          router.push(path.join(filePath, name))
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  )
}

const RecursiveTreeItem = ({ folderStructure }) =>
  folderStructure && folderStructure?.map(
    ({ name, files, path: filePath, isDirectory }, index) =>
      isDirectory && (
        <TreeItem
          label={<CenterLabel name={name} path={filePath} />}
          nodeId={`${index}-${path}`}
          key={`${index}-${path}`}
        >
          <RecursiveTreeItem folderStructure={files} />
        </TreeItem>
      )
  )

export default function FolderDrawer({ open, onDrawerClose, folderStructure }) {
  const theme = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        {folderStructure && <RecursiveTreeItem folderStructure={folderStructure} />}
      </TreeView>
    </Drawer>
  )
}
