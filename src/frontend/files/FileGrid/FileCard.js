import Link from "next/link"
import { useTheme } from "@mui/material/styles"
import { Card, CardHeader, Typography, Box } from "@mui/material"
import { Folder } from "@mui/icons-material"
import prettyBytes from "pretty-bytes"
import ActionButtons from "../ActionButtons"
import getDownloadLink from "../../utils/getDownloadLink"

const headerStyle = (theme) => ({
  wordWrap: "break-word",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.divider,
  },
  textDecoration: "none",
  color: theme.palette.text.primary,
})

const actionsStyle = {
  display: "flex",
  paddingLeft: "16px",
  paddingBottom: "6px",
  paddingRight: "16px",
  justifyContent: "space-between",
  alignItems: "center",
}

export default function FileCard({ file }) {
  const { name, isDirectory, size, href } = file
  const theme = useTheme()

  const fileHeader = () => (
    <CardHeader
      sx={headerStyle(theme)}
      title={<Typography variant="body1">{name}</Typography>}
      component="a"
      href={getDownloadLink(href)}
      target="_blank"
    />
  )

  const directoryHeader = () => (
    <Link href={href}>
      <CardHeader
        sx={headerStyle(theme)}
        avatar={file.isDirectory && <Folder />}
        title={<Typography variant="body1">{name}</Typography>}
      />
    </Link>
  )

  return (
    <Card sx={{ wordBreak: "break-all" }}>
      {isDirectory ? directoryHeader() : fileHeader()}
      <Box sx={actionsStyle}>
        <Typography variant="body2" color="text.secondary">
          {prettyBytes(size)}
        </Typography>
        <ActionButtons file={file} />
      </Box>
    </Card>
  )
}
