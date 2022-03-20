import { ListItemButton } from "@mui/material"
import getDownloadLink from "../../../utils/getDownloadLink"

export default function FileListItemButton({ href, children }) {
  return (
    <ListItemButton sx={{width: "100%"}} component="a" href={getDownloadLink(href)} target="_blank">
      {children}
    </ListItemButton>
  )
}
