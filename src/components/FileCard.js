import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material"
import { Folder, Download, MoreVert, Share } from "@mui/icons-material"
import prettyBytes from "pretty-bytes"
import FileDetails from "./FileDetails"

const headerStyle = {
  wordWrap: "break-word",
}

const actionsStyle = {
  display: "flex",
  padding: "16px",
  justifyContent: "space-between",
  alignItems: "center",
}

export default function FileCard({ name, path, details, thumbnail, host }) {
  const encodedLink = encodeURI(`/api/download${path}/${name}`)

  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const downloadFile = () => {
    window.open(encodedLink)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(`${host}${encodedLink}`);
  }

  return (
    <>
      <Card>
        <CardHeader
          avatar={details?.isDirectory && <Folder />}
          title={<Typography variant="body1">{name}</Typography>}
          action={<>
          <IconButton onClick={copyLink}>
            <Share />
          </IconButton>
          <IconButton onClick={handleModalOpen}>
              <MoreVert />
            </IconButton></>
            
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
