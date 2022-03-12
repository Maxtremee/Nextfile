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

export default function FileCard({ name, path: filePath, details, isDirectory }) {
  const fullPath = path.join(filePath, name)
  const { size } = details

  const router = useRouter()

  const goToDirectory = () => {
    if (isDirectory) {
      router.push(fullPath)
    }
  }

  return (
    <Card>
      <CardHeader
        sx={headerStyle(isDirectory)}
        avatar={isDirectory && <Folder />}
        title={
          <Typography variant="body1" onClick={goToDirectory}>
            {name}
          </Typography>
        }
      />
      {details && (
        <Box sx={actionsStyle}>
          <Typography variant="body2" color="text.secondary">
            {prettyBytes(size)}
          </Typography>
          <ActionButtons
            name={name}
            isDirectory={isDirectory}
            details={details}
            path={filePath}
          />
        </Box>
      )}
    </Card>
  )
}
