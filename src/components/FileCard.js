import React from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material"
import prettyBytes from "pretty-bytes"
import FolderIcon from "@mui/icons-material/Folder"
import Link from "next/link"

export default function FileCard({ name, path, details, thumbnail }) {
  return (
    <Link href={`/api/download${path}/${name}`}>
      <Card
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <CardHeader
          avatar={details?.isDirectory && <FolderIcon />}
          title={<Typography variant="body1">{name}</Typography>}
        />
        <CardContent>
          {thumbnail && (
            <CardMedia
              component="img"
              height="70"
              image={thumbnail}
              alt="image"
            />
          )}
          {details && (
            <>
              <Typography variant="body2" color="text.secondary">
                {new Date(details?.birthtime).toDateString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {prettyBytes(details?.size)}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
