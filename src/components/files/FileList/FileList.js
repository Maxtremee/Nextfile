import { Divider, List } from "@mui/material"
import FileEntry from "./FileEntry"

export default function FileList({ files }) {
  return (
    <List>
      <Divider />
      {files?.map?.((file) => (
        <>
          <FileEntry key={file.name} file={file} />
          <Divider />
        </>
      ))}
    </List>
  )
}
