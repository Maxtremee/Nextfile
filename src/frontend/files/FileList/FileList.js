import { List } from "@mui/material"
import FileEntry from "./FileEntry"

function FileList({ files }) {
  return (
    <List>
      {files?.map?.((file) => (
        <FileEntry key={file?.name} file={file} />
      ))}
    </List>
  )
}

export default FileList
