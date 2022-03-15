import path from "path"
import { useRouter } from "next/router"
import { Card, CardHeader, Typography, Box } from "@mui/material"
import { Folder } from "@mui/icons-material"
import prettyBytes from "pretty-bytes"
import ActionButtons from "../ActionButtons"

const headerStyle = (isDirectory) => {
  const style = {
    wordWrap: "break-word",
    transition: "background-color 0.2s ease-in-out",
  }
  if (isDirectory) {
    return {
      ...style,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    }
  }
  return style
}

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
  const router = useRouter()

  const goToDirectory = () => {
    if (isDirectory) {
      router.push(href)
    }
  }

  return (
    <Card>
      <CardHeader
        sx={headerStyle(isDirectory)}
        avatar={file.isDirectory && <Folder />}
        title={
          <Typography variant="body1" onClick={goToDirectory}>
            {name}
          </Typography>
        }
      />
      <Box sx={actionsStyle}>
        <Typography variant="body2" color="text.secondary">
          {prettyBytes(size)}
        </Typography>
        <ActionButtons file={file} />
      </Box>
    </Card>
  )
}
