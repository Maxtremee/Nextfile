import { useState } from "react"
import path from "path"
import { Box, IconButton, Tooltip } from "@mui/material"
import { Download, MoreVert, Share } from "@mui/icons-material"
import DetailsModal from "./DetailsModal"

export default function ActionButtons({
  name,
  path: filePath,
  details,
  isDirectory,
}) {
  const fullPath = path.join(filePath, name)
  const encodedLink = encodeURI(`/api/download/${fullPath}`)
  const defaultShareTooltipText = "Share"

  const [modalOpen, setModalOpen] = useState(false)
  const [shareText, setShareText] = useState(defaultShareTooltipText)

  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const downloadFile = () => {
    window.open(encodedLink)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(`${location.host}${encodedLink}`)
    setShareText("Link copied!")
  }

  return (
    <>
      <Box sx={{ display: "inline-block" }}>
        <Tooltip title={shareText} onClose={() => setShareText(defaultShareTooltipText)}>
          <IconButton onClick={copyLink}>
            <Share />
          </IconButton>
        </Tooltip>
        <Tooltip title="Details">
          <IconButton onClick={handleModalOpen}>
            <MoreVert />
          </IconButton>
        </Tooltip>
        <Tooltip title="Download">
          <IconButton onClick={downloadFile}>
            <Download />
          </IconButton>
        </Tooltip>
      </Box>
      <DetailsModal
        details={details}
        name={name}
        open={modalOpen}
        isDirectory={isDirectory}
        onClose={handleModalClose}
      />
    </>
  )
}
