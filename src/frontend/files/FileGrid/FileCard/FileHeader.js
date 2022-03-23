import { CardHeader, Typography, useTheme } from "@mui/material"
import { memo } from "react"
import getDownloadLink from "../../../utils/getDownloadLink"
import headerStyle from "./headerStyle"

 function FileHeader({ name, href }) {
  const theme = useTheme()
  
  return (
    <CardHeader
      sx={headerStyle(theme)}
      title={<Typography variant="body1">{name}</Typography>}
      component="a"
      href={getDownloadLink(href)}
      target="_blank"
    />
  )
}

export default memo(FileHeader)