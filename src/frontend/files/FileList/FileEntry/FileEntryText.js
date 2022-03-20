import { ListItemText } from "@mui/material"
import prettyBytes from "pretty-bytes"

export default function FileEntryText({ name, size }) {
  return (
    <ListItemText
      primary={name}
      secondary={prettyBytes(size)}
      primaryTypographyProps={{
        noWrap: true
      }}
    />
  )
}
