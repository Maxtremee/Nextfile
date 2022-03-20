import Link from "next/link"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material"
import Folder from "@mui/icons-material/Folder"
import prettyBytes from "pretty-bytes"
import ActionButtons from "../ActionButtons"
import getDownloadLink from "../../utils/getDownloadLink"

export default function FileEntry({ file }) {
  const { name, isDirectory, size, href } = file

  const fileListItemButton = () => (
    <ListItemButton component="a" href={getDownloadLink(href)} target="_blank">
      <ListItemText primary={name} secondary={prettyBytes(size)} />
    </ListItemButton>
  )

  const directoryListItemButton = () => (
    <Link href={href}>
      <ListItemButton>
        <ListItemIcon>
          <Folder />
        </ListItemIcon>
        <ListItemText primary={name} secondary={prettyBytes(size)} />
      </ListItemButton>
    </Link>
  )

  return (
    <ListItem sx={{ paddingRight: 0 }} divider>
      {isDirectory ? directoryListItemButton() : fileListItemButton()}
      <ListItemSecondaryAction>
        <ActionButtons file={file} />
      </ListItemSecondaryAction>
    </ListItem>
  )
}
