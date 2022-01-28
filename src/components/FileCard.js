import React from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material"
import FolderIcon from "@mui/icons-material/Folder"

export default function FileCard({ name, isDirectory, path, thumbnail }) {
  const downloadHandler = async () => {
    if (!isDirectory) {
      window.open(`/api/download/${path}`)
    }
  }

  return (
    <Card onClick={downloadHandler}>
      <CardHeader
        avatar={isDirectory && <FolderIcon />}
        title={<Typography variant="body1">{name}</Typography>}
      />
      <CardActionArea>
        {thumbnail && (
          <CardMedia
            component="img"
            height="70"
            image={thumbnail}
            alt="image"
          />
        )}
      </CardActionArea>
    </Card>
  )
}
