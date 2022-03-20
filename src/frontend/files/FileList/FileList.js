import { Divider, List } from "@mui/material"
import FileEntry from "./FileEntry"

function FileList({ files }) {
  return (
    <List>
      {files?.map?.((file) => (
        <>
          <FileEntry key={file.name} file={file} />
          <Divider />
        </>
      ))}
    </List>
  )
}

export default FileList
