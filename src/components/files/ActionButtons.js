import { useState } from "react"
import path from "path"
import { Box, IconButton, Tooltip } from "@mui/material"
import { Download, MoreVert, Share } from "@mui/icons-material"
import DetailsModal from "./DetailsModal"

const defaultShareTooltipText = "Share"

export default function ActionButtons({ file }) {
  const { href } = file
  const encodedLink = encodeURI(path.join('/api/download/', href))

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
        <Tooltip
          title={shareText}
          onClose={() => setShareText(defaultShareTooltipText)}
        >
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
      <DetailsModal file={file} open={modalOpen} onClose={handleModalClose} />
    </>
  )
}
