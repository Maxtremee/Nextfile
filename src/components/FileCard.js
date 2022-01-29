import React from "react"
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material"
import FolderIcon from "@mui/icons-material/Folder"

export default function FileCard({ name, path, details, thumbnail }) {
  const downloadHandler = async () => {
    window.open(`/api/download/${path}/${name}`)
  }

  return (
    <Card onClick={downloadHandler}>
      <CardHeader
        avatar={details?.isDirectory && <FolderIcon />}
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
        <Typography variant="body2">{Date(details?.birthtime)}</Typography>
      </CardActionArea>
    </Card>
  )
}
