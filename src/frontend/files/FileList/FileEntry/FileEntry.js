import { ListItem, ListItemSecondaryAction } from "@mui/material"
import ActionButtons from "../../ActionButtons"
import DirectoryItem from "./DirectoryItem"
import FileItem from "./FileItem"

export default function FileEntry({ file }) {
  const { isDirectory } = file

  return (
    <ListItem sx={{ paddingRight: 0, paddingLeft: 0 }}>
      {isDirectory ? <DirectoryItem file={file} /> : <FileItem file={file} />}
      <ListItemSecondaryAction>
        <ActionButtons file={file} />
      </ListItemSecondaryAction>
    </ListItem>
  )
}
