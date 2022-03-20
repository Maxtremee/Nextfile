import { useState } from "react"
import { useRouter } from "next/router"
import { Box, IconButton, Tooltip } from "@mui/material"
import { Archive, MoreVert, Share, Preview } from "@mui/icons-material"
import DetailsModal from "./DetailsModal"
import getDownloadLink from "../utils/getDownloadLink"
import { defaultShareTooltipText } from "../constants"
import MediaModal from "./MediaModal"
import getMediaType from "../utils/getMediaType"

export default function ActionButtons({ file }) {
  const { href, isDirectory, extension } = file
  const router = useRouter()
  const [mediaType] = getMediaType(extension)

  const [detailsModalOpen, setDetailsModalOpen] = useState(false)
  const [mediaModalOpen, setMediaModalOpen] = useState(false)
  const [shareText, setShareText] = useState(defaultShareTooltipText)

  const handleDetailsModalOpen = () => setDetailsModalOpen(true)
  const handleDetailsModalClose = () => setDetailsModalOpen(false)
  const handleMediaModalOpen = () => setMediaModalOpen(true)
  const handleMediaModalClose = () => setMediaModalOpen(false)

  const downloadFolder = () => {
    router.push(getDownloadLink(href, true))
  }

  const copyLink = () => {
    navigator.clipboard.writeText(
      `${location.host}${getDownloadLink(href, isDirectory)}`
    )
    setShareText("Link copied!")
  }

  return (
    <>
      <Box sx={{ display: "inline-block" }}>
        {isDirectory && (
          <Tooltip title="Download folder as zip">
            <IconButton onClick={downloadFolder}>
              <Archive />
            </IconButton>
          </Tooltip>
        )}
        {mediaType && (
          <Tooltip title="Preview">
            <IconButton onClick={handleMediaModalOpen}>
              <Preview />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip
          title={shareText}
          onClose={() => setShareText(defaultShareTooltipText)}
        >
          <IconButton onClick={copyLink}>
            <Share />
          </IconButton>
        </Tooltip>
        <Tooltip title="Details">
          <IconButton onClick={handleDetailsModalOpen}>
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Box>
      <DetailsModal
        file={file}
        open={detailsModalOpen}
        onClose={handleDetailsModalClose}
      />
      <MediaModal
        file={file}
        open={mediaModalOpen}
        onClose={handleMediaModalClose}
      />
    </>
  )
}
