import { ListItemText, useMediaQuery, useTheme } from "@mui/material"
import prettyBytes from "pretty-bytes"

const textStyle = (theme, isDirectory) => ({
  flex: "0 1 auto",
  wordBreak: "break-all",
  [theme.breakpoints.down("sm")]: {
    width: isDirectory ? 130 : 180,
  },
  [theme.breakpoints.up("sm")]: {
    width: isDirectory ? "65%" : "75%",
  },
  [theme.breakpoints.up("md")]: {
    width: isDirectory ? "78%" : "85%",
  },
  [theme.breakpoints.up("lg")]: {
    width: isDirectory ? "85%" : "90%",
  },
  [theme.breakpoints.up("xl")]: {
    width: isDirectory ? "90%" : "95%",
  },
})

export default function FileEntryText({ name, size, isDirectory }) {
  const theme = useTheme()
  
  // equivalent to theme.breakpoints.down("sm")
  // neede for proper word ellipsis
  const noWrapDownSm = useMediaQuery("(max-width: 599.95px)")
  
  return (
    <ListItemText
      sx={textStyle(theme, isDirectory)}
      primary={name}
      secondary={prettyBytes(size)}
      primaryTypographyProps={{
        noWrap: noWrapDownSm,
      }}
    />
  )
}
