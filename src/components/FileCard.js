import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Box,
  CardActionArea,
} from "@mui/material"
import { Folder, Download, MoreVert } from "@mui/icons-material"
import prettyBytes from "pretty-bytes"
import FileDetails from "./FileDetails"

const cardStyle = {
  // minHeight: "200px",
}

const headerStyle = {
  wordWrap: "break-word",
}

const actionsStyle = {
  display: "flex",
  padding: "16px",
  justifyContent: "space-between",
  alignItems: "center",
}

export default function FileCard({ name, path, details, thumbnail }) {
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const downloadFile = () => {
    const encodedLink = encodeURI(`/api/download${path}/${name}`)
    window.open(encodedLink)
  }

  return (
    <>
      <Card sx={cardStyle}>
        <CardHeader
          avatar={details?.isDirectory && <Folder />}
          title={<Typography variant="body1">{name}</Typography>}
          action={
            <IconButton onClick={handleModalOpen}>
              <MoreVert />
            </IconButton>
          }
          sx={headerStyle}
        />
        {thumbnail && (
          <CardMedia
            component="img"
            height="70"
            image={thumbnail}
            alt="image"
          />
        )}
        {details && (
          <Box sx={actionsStyle}>
            <Typography variant="body2" color="text.secondary">
              {prettyBytes(details?.size)}
            </Typography>
            <IconButton onClick={downloadFile}>
              <Download />
            </IconButton>
          </Box>
        )}
      </Card>
      <FileDetails
        details={details}
        name={name}
        open={modalOpen}
        onClose={handleModalClose}
      />
    </>
  )
}
