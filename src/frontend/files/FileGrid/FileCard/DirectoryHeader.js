import Link from "next/link"
import { CardHeader, Typography, useTheme } from "@mui/material"
import { Folder } from "@mui/icons-material"
import headerStyle from "./headerStyle"
import { memo } from "react"

function DirectoryHeader({ name, href }) {
  const theme = useTheme()

  return (
    <Link href={href}>
      <CardHeader
        sx={headerStyle(theme)}
        avatar={<Folder />}
        title={<Typography variant="body1">{name}</Typography>}
      />
    </Link>
  )
}

export default memo(DirectoryHeader)
