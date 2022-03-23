import { ListItemButton } from "@mui/material"
import { memo } from "react"
import getDownloadLink from "../../../utils/getDownloadLink"
import ItemText from "./ItemText"

function FileItem({ file }) {
  const { name, size, href, isDirectory } = file
  return (
    <ListItemButton component="a" href={getDownloadLink(href)} target="_blank">
      <ItemText name={name} size={size} isDirectory={isDirectory} />
    </ListItemButton>
  )
}

export default memo(FileItem)