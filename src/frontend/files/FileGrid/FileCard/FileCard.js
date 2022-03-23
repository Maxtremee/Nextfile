import { Card, Typography, Box } from "@mui/material"
import prettyBytes from "pretty-bytes"
import ActionButtons from "../../ActionButtons"
import DirectoryHeader from "./DirectoryHeader"
import FileHeader from "./FileHeader"

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

  return (
    <Card sx={{ wordBreak: "break-all" }}>
      {isDirectory ? <DirectoryHeader name={name} href={href} /> : <FileHeader name={name} href={href} />}
      <Box sx={actionsStyle}>
        <Typography variant="body2" color="text.secondary">
          {prettyBytes(size)}
        </Typography>
        <ActionButtons file={file} />
      </Box>
    </Card>
  )
}
