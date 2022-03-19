import path from "path"
import { useRouter } from "next/router"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { Folder } from "@mui/icons-material"
import prettyBytes from "pretty-bytes"
import ActionButtons from "../ActionButtons"

export default function FileEntry({ file }) {
  const { name, isDirectory, size, href } = file

  const router = useRouter()

  const goToDirectory = () => {
    if (isDirectory) {
      router.push(href)
    }
  }

  return (
    <ListItem
      sx={{ paddingRight: 0 }}
      secondaryAction={<ActionButtons file={file} />}
    >
      <ListItemButton onClick={goToDirectory}>
        {isDirectory && (
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
        )}
        <ListItemText primary={name} secondary={size ? prettyBytes(size) : null} />
      </ListItemButton>
    </ListItem>
  )
}
