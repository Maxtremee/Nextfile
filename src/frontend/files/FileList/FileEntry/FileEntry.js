import { ListItem, ListItemSecondaryAction } from "@mui/material"
import ActionButtons from "../../ActionButtons"
import FileEntryText from "./FileEntryText"
import DirectoryListItemButton from "./DirectoryListItemButton"
import FileListItemButton from "./FileListItemButton"

export default function FileEntry({ file }) {
  const { name, isDirectory, size, href } = file

  return (
    <ListItem sx={{ paddingRight: 0, paddingLeft: 0, width: "75%" }}>
      {isDirectory ? (
        <DirectoryListItemButton href={href}>
          <FileEntryText name={name} size={size} />
        </DirectoryListItemButton>
      ) : (
        <FileListItemButton href={href}>
          <FileEntryText name={name} size={size} />
        </FileListItemButton>
      )}
      <ListItemSecondaryAction>
        <ActionButtons file={file} />
      </ListItemSecondaryAction>
    </ListItem>
  )
}
