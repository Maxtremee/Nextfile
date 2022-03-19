import { useRouter } from "next/router"
import useSWR from "swr"
import { useTheme } from "@mui/material/styles"
import { Drawer, IconButton, Divider, Box, Tooltip } from "@mui/material"
import { TreeView, TreeItem } from "@mui/lab"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import DrawerHeader from "./DrawerHeader"
import { drawerWidth } from "../constants"
import fetcher from "../shared/fetcher"
import { useAppContext } from "../AppContext"

const CenterLabel = ({ name, href }) => {
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
      <Tooltip title="Go to">
        <IconButton
          onClick={() => {
            router.push(href)
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

const DirectoryTreeItems = ({ directories }) =>
  directories?.map?.(({ name, directories, href }) =>
    directories.length > 0 ? (
      <TreeItem
        label={<CenterLabel name={name} href={href} />}
        nodeId={`${href}-${name}`}
        key={`${href}-${name}`}
      >
        <DirectoryTreeItems directories={directories} />
      </TreeItem>
    ) : (
      <TreeItem
        label={<CenterLabel name={name} href={href} />}
        nodeId={`${href}-${name}`}
        key={`${href}-${name}`}
      />
    )
  )

export default function FolderDrawer() {
  const theme = useTheme()
  const { drawerOpen, setDrawerOpen } = useAppContext()
  const { data } = useSWR("/api/structure", fetcher)

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
      open={drawerOpen}
    >
      <DrawerHeader>
        <IconButton onClick={() => setDrawerOpen(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {data && (
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          <DirectoryTreeItems directories={data} />
        </TreeView>
      )}
    </Drawer>
  )
}
