import { Divider, List } from "@mui/material"
import FileEntry from "./FileEntry"

export default function FileList({ folderStructure }) {
  return (
    <List>
      <Divider />
      {folderStructure &&
        folderStructure.map((file) => (
          <>
            <FileEntry key={file?.name} {...file} />
            <Divider />
          </>
        ))}
    </List>
  )
}
