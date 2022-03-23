import Link from "next/link"
import { ListItemButton, ListItemIcon } from "@mui/material"
import Folder from "@mui/icons-material/Folder"
import ItemText from "./ItemText"
import { memo } from "react"

function DirectoryItem({ file }) {
  const { name, size, href, isDirectory } = file

  return (
    <Link href={href}>
      <ListItemButton>
        <ListItemIcon>
          <Folder />
        </ListItemIcon>
        <ItemText name={name} size={size} isDirectory={isDirectory} />
      </ListItemButton>
    </Link>
  )
}

export default memo(DirectoryItem)