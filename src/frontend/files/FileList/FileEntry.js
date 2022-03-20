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

  const listItemButtonProps = () => {
    if (!isDirectory) {
      return {
        component: "a",
        href: getDownloadLink(href),
        target: "_blank",
      }
    }
  }

  const renderListItem = () => (
    <ListItem sx={{ paddingRight: 0 }} divider>
      <ListItemButton {...listItemButtonProps()}>
        {isDirectory && (
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
        )}
        <ListItemText primary={name} secondary={prettyBytes(size)} />
      </ListItemButton>
      <ListItemSecondaryAction>
        <ActionButtons file={file} />
      </ListItemSecondaryAction>
    </ListItem>
  )

  return isDirectory ? (
    <Link href={href}>{renderListItem()}</Link>
  ) : (
    renderListItem()
  )
}
