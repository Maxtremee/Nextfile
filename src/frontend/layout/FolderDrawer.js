import { useRouter } from "next/router"
import useSWR from "swr"
import { Drawer, IconButton, Divider, Box, Tooltip } from "@mui/material"
import { TreeView, TreeItem } from "@mui/lab"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { drawerWidth } from "../constants"
import fetcher from "../shared/fetcher"
import { useAppContext } from "../AppContext"
import { Home } from "@mui/icons-material"
import { useTranslations } from "next-intl"

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
  const { drawerOpen } = useAppContext()
  const { data } = useSWR("/api/structure", fetcher)
  const t = useTranslations("FolderDrawer")

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
      <Divider />
      {data && (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
          defaultExpanded={["home"]}
        >
          <TreeItem
            label={<CenterLabel name={t("home")} href={"/"} />}
            nodeId="home"
            key="home"
            icon={<Home />}
          >
            <DirectoryTreeItems directories={data} />
          </TreeItem>
        </TreeView>
      )}
    </Drawer>
  )
}
