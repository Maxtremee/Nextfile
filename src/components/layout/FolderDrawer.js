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
import { drawerWidth } from "./constants"

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

const RecursiveTreeItem = ({ directories }) =>
  directories?.map?.(({ name, directories, href }) =>
    directories.length > 0 ? (
      <TreeItem
        label={<CenterLabel name={name} href={href} />}
        nodeId={`${href}-${name}`}
        key={`${href}-${name}`}
      >
        <RecursiveTreeItem directories={directories} />
      </TreeItem>
    ) : (
      <TreeItem
        label={<CenterLabel name={name} href={href} />}
        nodeId={`${href}-${name}`}
        key={`${href}-${name}`}
      />
    )
  )

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function FolderDrawer({ open, onDrawerClose }) {
  const theme = useTheme()
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
      {data && (
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          <RecursiveTreeItem directories={data} />
        </TreeView>
      )}
    </Drawer>
  )
}
