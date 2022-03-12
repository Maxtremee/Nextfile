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

export default function FileEntry({ name, path: filePath, details, isDirectory }) {
  const fullPath = path.join(filePath, name)
  const { size } = details

  const router = useRouter()

  const goToDirectory = () => {
    if (isDirectory) {
      router.push(fullPath)
    }
  }

  return (
    <ListItem
      sx={{ paddingRight: 0 }}
      secondaryAction={
        <ActionButtons
          name={name}
          isDirectory={isDirectory}
          details={details}
          path={path}
        />
      }
    >
      <ListItemButton onClick={goToDirectory}>
        {isDirectory && (
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
        )}
        <ListItemText primary={name} secondary={prettyBytes(size)} />
      </ListItemButton>
    </ListItem>
  )
}
