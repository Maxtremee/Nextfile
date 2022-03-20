import Link from "next/link"
import { ListItemButton, ListItemIcon } from "@mui/material"
import Folder from "@mui/icons-material/Folder"

export default function DirectoryListItemButton({ href, children }) {
  return (
    <Link href={href}>
      <ListItemButton>
        <ListItemIcon>
          <Folder />
        </ListItemIcon>
        {children}
      </ListItemButton>
    </Link>
  )
}
